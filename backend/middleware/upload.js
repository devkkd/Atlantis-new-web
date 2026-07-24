import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({

    storage,

    limits: {

        fileSize: 100 * 1024 * 1024 // 100 MB

    }

});

/* ===========================
   HERO UPLOAD
=========================== */

export const heroUpload = upload.fields([

    {
        name: "image0",
        maxCount: 1
    },

    {
        name: "image1",
        maxCount: 1
    },

    {
        name: "image2",
        maxCount: 1
    },

    {
        name: "image3",
        maxCount: 1
    },

    {
        name: "image4",
        maxCount: 1
    },

    {
        name: "image5",
        maxCount: 1
    }

]);

/* ===========================
   VENUE UPLOAD
=========================== */

export const venueUpload = upload.fields([

    {

        name: "venue0",

        maxCount: 1

    },

    {

        name: "venue1",

        maxCount: 1

    },

    {

        name: "venue2",

        maxCount: 1

    },

    {

        name: "venue3",

        maxCount: 1

    }

]);

/* ===========================
   WEDDING VIDEO UPLOAD
=========================== */

export const weddingUpload = upload.fields([

    {

        name: "video0",

        maxCount: 1

    },

    {

        name: "video1",

        maxCount: 1

    },

    {

        name: "video2",

        maxCount: 1

    },

    {

        name: "video3",

        maxCount: 1

    }

]);
/* ===========================
   BUSINESS IMAGE UPLOAD
=========================== */

export const businessUpload = upload.fields([

    {

        name: "business0",

        maxCount: 1

    },

    {

        name: "business1",

        maxCount: 1

    }

]);
/* ===========================
   AWARDS IMAGE UPLOAD
=========================== */

export const awardsUpload = upload.fields([

    {
        name: "awards0",
        maxCount: 1
    },

    {
        name: "awards1",
        maxCount: 1
    },

    {
        name: "awards2",
        maxCount: 1
    },

    {
        name: "awards3",
        maxCount: 1
    }

]);
/* ===========================
   MAGIC VIDEO UPLOAD
=========================== */

export const magicUpload = upload.fields([

    {

        name: "magicVideo",

        maxCount: 1

    }

]);
/* ===========================
   ATLANTIIS UPLOAD
=========================== */

export const atlantiisUpload = upload.fields([

    {

        name: "atlantiis",

        maxCount: 1

    }

]);
/* ===========================
   GALLERY IMAGE UPLOAD
=========================== */

export const galleryUpload = upload.fields([

    /* Grand Hall */

    { name: "grandHall0", maxCount: 1 },
    { name: "grandHall1", maxCount: 1 },
    { name: "grandHall2", maxCount: 1 },
    { name: "grandHall3", maxCount: 1 },
    { name: "grandHall4", maxCount: 1 },
    { name: "grandHall5", maxCount: 1 },
    { name: "grandHall6", maxCount: 1 },
    { name: "grandHall7", maxCount: 1 },
    { name: "grandHall8", maxCount: 1 },
    { name: "grandHall9", maxCount: 1 },

    /* Pre Function */

    { name: "preFunction0", maxCount: 1 },
    { name: "preFunction1", maxCount: 1 },
    { name: "preFunction2", maxCount: 1 },
    { name: "preFunction3", maxCount: 1 },
    { name: "preFunction4", maxCount: 1 },
    { name: "preFunction5", maxCount: 1 },
    { name: "preFunction6", maxCount: 1 },
    { name: "preFunction7", maxCount: 1 },
    { name: "preFunction8", maxCount: 1 },
    { name: "preFunction9", maxCount: 1 },

    /* Dining */

    { name: "diningHall0", maxCount: 1 },
    { name: "diningHall1", maxCount: 1 },
    { name: "diningHall2", maxCount: 1 },
    { name: "diningHall3", maxCount: 1 },
    { name: "diningHall4", maxCount: 1 },

    /* Dressing */

    { name: "dressingSuite0", maxCount: 1 },
    { name: "dressingSuite1", maxCount: 1 },
    { name: "dressingSuite2", maxCount: 1 },
    { name: "dressingSuite3", maxCount: 1 },
    { name: "dressingSuite4", maxCount: 1 },
    { name: "dressingSuite5", maxCount: 1 },
    { name: "dressingSuite6", maxCount: 1 },
    { name: "dressingSuite7", maxCount: 1 },
    { name: "dressingSuite8", maxCount: 1 },
    { name: "dressingSuite9", maxCount: 1 },

    /* Property */

    { name: "propertyInsights0", maxCount: 1 },
    { name: "propertyInsights1", maxCount: 1 },
    { name: "propertyInsights2", maxCount: 1 },
    { name: "propertyInsights3", maxCount: 1 },
    { name: "propertyInsights4", maxCount: 1 },
    { name: "propertyInsights5", maxCount: 1 },
    { name: "propertyInsights6", maxCount: 1 },
    { name: "propertyInsights7", maxCount: 1 },
    { name: "propertyInsights8", maxCount: 1 },
    { name: "propertyInsights9", maxCount: 1 },
    /* Contact Landing */

{ name: "contactLanding", maxCount: 1 }

]);
/* ===========================
   VENUE LANDING UPLOAD
=========================== */

export const venueLandingUpload = upload.single(

    "image"

);
/* ===========================
   FLOOR PLAN UPLOAD
=========================== */

export const floorPlanUpload = upload.single(

    "image"

);
/* ===========================
   GRAND HALL UPLOAD
=========================== */

export const grandHallUpload = upload.single(

    "image"

);
/* ===========================
   SMALL HALL UPLOAD
=========================== */

export const smallHallUpload = upload.single(

    "image"

);
/* ===========================
   LAWN UPLOAD
=========================== */

export const lawnUpload = upload.single(

    "image"

);
/* ===========================
   SERVICE LANDING UPLOAD
=========================== */

export const serviceLandingUpload = upload.single(

    "image"

);
/* ===========================
   CONTACT LANDING UPLOAD
=========================== */

export const contactLandingUpload = upload.single(

    "image"

);
/* ===========================
   BLOG LANDING UPLOAD
=========================== */

export const blogLandingUpload = upload.single(

    "image"

);
export const blogSectionImagesUpload = upload.fields([
    { name: "sectionImage", maxCount: 10 }   // up to 10 images in one request
]);
/* ===========================
   BLOG FEATURED IMAGE UPLOAD
=========================== */

/* ===========================
   BLOG FEATURED IMAGE UPLOAD
=========================== */
export const blogFeaturedUpload = upload.single("image");
export const noneUpload = upload.none();

export default upload;