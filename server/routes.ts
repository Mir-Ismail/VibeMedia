import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { sendContactFormEmail, sendNewsletterConfirmation } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactFormEmail(validatedData);
      
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.subscribeNewsletter(validatedData);
      
      // Send confirmation email
      await sendNewsletterConfirmation(validatedData.email);
      
      res.json({ 
        success: true, 
        id: subscription.id,
        message: "Successfully subscribed to newsletter"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid email address", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
