import { Router } from "express";
import {
  addAudioMessage,
  addImageMessage,
  addMessage,
  getInitialContactswitchMessages,
  getMessages,
} from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const upload = multer({ dest: "uploads/recordings" });

const uploadImage = multer({ dest: "uploads/images" });

// Route for adding a message
router.post("/add-message", addMessage);

// Route for fetching messages with parameters 'from' and 'to'
router.get("/get-messages/:from/:to", getMessages);

router.post("/add-image-message", uploadImage.single("image"), addImageMessage);

router.post("/add-audio-message", upload.single("audio"), addAudioMessage);

router.get("/get-initial-contacts/:from", getInitialContactswitchMessages);

export default router;
 