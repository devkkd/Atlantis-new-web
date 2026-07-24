import Service from "../models/Service.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import r2 from "../config/r2.js";

/* ===========================
   GET SERVICE
=========================== */

export const getService = async (req, res) => {
  try {
    let service = await Service.findOne();

    if (!service) {
      service = await Service.create({});
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   UPDATE SERVICE IMAGE
=========================== */

export const updateServiceImage = async (req, res) => {
  try {
    let service = await Service.findOne();

    if (!service) {
      service = await Service.create({});
    }

    if (req.file) {
      const file = req.file;

      const fileName = `service/${Date.now()}-${file.originalname.replace(
        /\s+/g,
        "-"
      )}`;

      await r2.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: fileName,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
      );

      service.serviceLanding.image = `${process.env.R2_PUBLIC_URL}/${fileName}`;
    }

    await service.save();

    res.status(200).json({
      success: true,
      message: "Service Image Updated Successfully",
      service,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   UPDATE SERVICE CONTENT
=========================== */

export const updateServiceContent = async (req, res) => {
  try {
    let service = await Service.findOne();

    if (!service) {
      service = await Service.create({});
    }

    if (req.body.title !== undefined) {
      service.serviceLanding.title = req.body.title;
    }

    if (req.body.subtitle !== undefined) {
      service.serviceLanding.subtitle = req.body.subtitle;
    }

    if (req.body.description !== undefined) {
      service.serviceLanding.description = req.body.description;
    }

    await service.save();

    res.status(200).json({
      success: true,
      message: "Service Content Updated Successfully",
      service,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};