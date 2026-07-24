import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Venue.css";

export default function Venue() {
  const [image, setImage] = useState("");

  const [file, setFile] = useState(null);

const [imageSaving, setImageSaving] = useState(false);
const [contentSaving, setContentSaving] = useState(false);
  const [venueContent, setVenueContent] = useState({
    title: "",
    subtitle: "",
    description: ""
  });
  const [floorPlanImage, setFloorPlanImage] = useState("");
const [floorPlanFile, setFloorPlanFile] = useState(null);

const [floorPlanSaving, setFloorPlanSaving] = useState(false);
const [floorPlanContentSaving, setFloorPlanContentSaving] = useState(false);

const [floorPlanContent, setFloorPlanContent] = useState({
  title: "",
  subtitle: "",
  description: ""
});
const [grandHallImage, setGrandHallImage] = useState("");
const [grandHallFile, setGrandHallFile] = useState(null);

const [grandHallSaving, setGrandHallSaving] = useState(false);
const [grandHallContentSaving, setGrandHallContentSaving] = useState(false);

const [grandHallContent, setGrandHallContent] = useState({
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  theatre: "",
  classroom: "",
  cocktail: "",
  sitDown: "",
  totalArea: "",
  length: "",
  width: "",
  height: ""
});
const [smallHallImage, setSmallHallImage] = useState("");
const [smallHallFile, setSmallHallFile] = useState(null);

const [smallHallSaving, setSmallHallSaving] = useState(false);
const [smallHallContentSaving, setSmallHallContentSaving] = useState(false);

const [smallHallContent, setSmallHallContent] = useState({
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  theatre: "",
  classroom: "",
  cocktail: "",
  sitDown: "",
  totalArea: "",
  length: "",
  width: "",
  height: ""
});
const [lawnImage, setLawnImage] = useState("");
const [lawnFile, setLawnFile] = useState(null);

const [lawnSaving, setLawnSaving] = useState(false);
const [lawnContentSaving, setLawnContentSaving] = useState(false);

const [lawnContent, setLawnContent] = useState({
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  theatre: "",
  classroom: "",
  cocktail: "",
  sitDown: "",
  totalArea: "",
  length: "",
  width: "",
  height: ""
});
  useEffect(() => {
    getVenue();
  }, []);

  const getVenue = async () => {
    try {
      const { data } = await api.get("/venue");

      if (data.venue) {
        setImage(data.venue.image);

        setVenueContent({
          title: data.venue.title || "",
          subtitle: data.venue.subtitle || "",
          description: data.venue.description || ""
        });
        setFloorPlanImage(data.venue.floorPlan?.image || "");

setFloorPlanContent({
  title: data.venue.floorPlan?.title || "",
  subtitle: data.venue.floorPlan?.subtitle || "",
  description: data.venue.floorPlan?.description || ""
});
setGrandHallImage(data.venue.grandHall?.image || "");

setGrandHallContent({
  title: data.venue.grandHall?.title || "",
  subtitle: data.venue.grandHall?.subtitle || "",
  description: data.venue.grandHall?.description || "",
  buttonText: data.venue.grandHall?.buttonText || "",
  theatre: data.venue.grandHall?.theatre || "",
  classroom: data.venue.grandHall?.classroom || "",
  cocktail: data.venue.grandHall?.cocktail || "",
  sitDown: data.venue.grandHall?.sitDown || "",
  totalArea: data.venue.grandHall?.totalArea || "",
  length: data.venue.grandHall?.length || "",
  width: data.venue.grandHall?.width || "",
  height: data.venue.grandHall?.height || ""
});
setSmallHallImage(data.venue.smallHall?.image || "");

setSmallHallContent({
  title: data.venue.smallHall?.title || "",
  subtitle: data.venue.smallHall?.subtitle || "",
  description: data.venue.smallHall?.description || "",
  buttonText: data.venue.smallHall?.buttonText || "",
  theatre: data.venue.smallHall?.theatre || "",
  classroom: data.venue.smallHall?.classroom || "",
  cocktail: data.venue.smallHall?.cocktail || "",
  sitDown: data.venue.smallHall?.sitDown || "",
  totalArea: data.venue.smallHall?.totalArea || "",
  length: data.venue.smallHall?.length || "",
  width: data.venue.smallHall?.width || "",
  height: data.venue.smallHall?.height || ""
});
setLawnImage(data.venue.lawn?.image || "");

setLawnContent({
  title: data.venue.lawn?.title || "",
  subtitle: data.venue.lawn?.subtitle || "",
  description: data.venue.lawn?.description || "",
  buttonText: data.venue.lawn?.buttonText || "",
  theatre: data.venue.lawn?.theatre || "",
  classroom: data.venue.lawn?.classroom || "",
  cocktail: data.venue.lawn?.cocktail || "",
  sitDown: data.venue.lawn?.sitDown || "",
  totalArea: data.venue.lawn?.totalArea || "",
  length: data.venue.lawn?.length || "",
  width: data.venue.lawn?.width || "",
  height: data.venue.lawn?.height || ""
});
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = e => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);

    setImage(URL.createObjectURL(selected));
  };

  const saveVenue = async () => {
    try {
   setImageSaving(true);

      const formData = new FormData();

      if (file) {
        formData.append("image", file);
      }
      

      await api.put("/venue", formData);

      await getVenue();

      alert("Venue Landing Updated Successfully");
    } catch (err) {
      console.log(err);

      alert("Something Went Wrong");
    } finally {
      setImageSaving(false);
    }
  };
const saveVenueContent = async () => {
  try {

    setContentSaving(true);

    const formData = new FormData();

    formData.append("title", venueContent.title);
    formData.append("subtitle", venueContent.subtitle);
    formData.append("description", venueContent.description);

    const { data } = await api.put("/venue", formData);

    if (data.success) {

      alert("Venue Content Updated Successfully");

      await getVenue();

    }

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

  setContentSaving(false);

  }
};
const handleFloorPlanImage = e => {

  const selected = e.target.files[0];

  if (!selected) return;

  setFloorPlanFile(selected);

  setFloorPlanImage(URL.createObjectURL(selected));

};

const saveFloorPlanImage = async () => {

  try {

    setFloorPlanSaving(true);

    const formData = new FormData();

    if (floorPlanFile) {

      formData.append("image", floorPlanFile);

    }

    await api.put("/venue/floor-plan", formData);

    await getVenue();

    alert("Floor Plan Image Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setFloorPlanSaving(false);

  }

};

const saveFloorPlanContent = async () => {

  try {

    setFloorPlanContentSaving(true);

    const formData = new FormData();

    formData.append("title", floorPlanContent.title);
    formData.append("subtitle", floorPlanContent.subtitle);
    formData.append("description", floorPlanContent.description);

    await api.put("/venue/floor-plan", formData);

    await getVenue();

    alert("Floor Plan Content Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setFloorPlanContentSaving(false);

  }

};
const handleGrandHallImage = e => {

  const selected = e.target.files[0];

  if (!selected) return;

  setGrandHallFile(selected);

  setGrandHallImage(URL.createObjectURL(selected));

};
const saveGrandHallImage = async () => {

  try {

    setGrandHallSaving(true);

    const formData = new FormData();

    if (grandHallFile) {

      formData.append("image", grandHallFile);

    }

    await api.put("/venue/grand-hall", formData);

    await getVenue();

    alert("Grand Hall Image Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setGrandHallSaving(false);

  }

};
const saveGrandHallContent = async () => {

  try {

    setGrandHallContentSaving(true);

    const formData = new FormData();

    Object.keys(grandHallContent).forEach(key => {

      formData.append(key, grandHallContent[key]);

    });

    await api.put("/venue/grand-hall", formData);

    await getVenue();

    alert("Grand Hall Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setGrandHallContentSaving(false);

  }

};
const handleSmallHallImage = e => {

  const selected = e.target.files[0];

  if (!selected) return;

  setSmallHallFile(selected);

  setSmallHallImage(URL.createObjectURL(selected));

};

const saveSmallHallImage = async () => {

  try {

    setSmallHallSaving(true);

    const formData = new FormData();

    if (smallHallFile) {
      formData.append("image", smallHallFile);
    }

    await api.put("/venue/small-hall", formData);

    await getVenue();

    alert("Small Hall Image Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setSmallHallSaving(false);

  }

};

const saveSmallHallContent = async () => {

  try {

    setSmallHallContentSaving(true);

    const formData = new FormData();

    Object.keys(smallHallContent).forEach(key => {
      formData.append(key, smallHallContent[key]);
    });

    await api.put("/venue/small-hall", formData);

    await getVenue();

    alert("Small Hall Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setSmallHallContentSaving(false);

  }

};
const handleLawnImage = e => {

  const selected = e.target.files[0];

  if (!selected) return;

  setLawnFile(selected);

  setLawnImage(URL.createObjectURL(selected));

};

const saveLawnImage = async () => {

  try {

    setLawnSaving(true);

    const formData = new FormData();

    if (lawnFile) {
      formData.append("image", lawnFile);
    }

    await api.put("/venue/lawn", formData);

    await getVenue();

    alert("Lawn Image Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setLawnSaving(false);

  }

};

const saveLawnContent = async () => {

  try {

    setLawnContentSaving(true);

    const formData = new FormData();

    Object.keys(lawnContent).forEach(key => {
      formData.append(key, lawnContent[key]);
    });

    await api.put("/venue/lawn", formData);

    await getVenue();

    alert("Lawn Updated Successfully");

  } catch (err) {

    console.log(err);

    alert("Something Went Wrong");

  } finally {

    setLawnContentSaving(false);

  }

};
  return (
    <DashboardLayout>
      <div className="venue-page">
        <h1>Venue Landing CMS</h1>

        <div className="cms-card">
          <h2>Venue Landing Image</h2>

          <div className="hero-grid">
            <div className="hero-item">
              <div className="hero-preview">
                {image ? (
                  <img src={image} alt="" />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </div>

              <label>Upload Image</label>

              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
          </div>

       <button className="save-btn" onClick={saveVenue}>
  {imageSaving ? "Saving..." : "Save Venue Landing"}
</button>
        </div>
        <div className="cms-card">
          <h2>Venue Content</h2>

          <label>Title</label>

          <input
            type="text"
            value={venueContent.title}
            onChange={e =>
              setVenueContent({
                ...venueContent,
                title: e.target.value
              })
            }
          />

          <label>Subtitle</label>

          <textarea
            rows="3"
            value={venueContent.subtitle}
            onChange={e =>
              setVenueContent({
                ...venueContent,
                subtitle: e.target.value
              })
            }
          />

          <label>Description</label>

          <textarea
            rows="6"
            value={venueContent.description}
            onChange={e =>
              setVenueContent({
                ...venueContent,
                description: e.target.value
              })
            }
          />

        <button className="save-btn" onClick={saveVenueContent}>
  {contentSaving ? "Saving..." : "Save Venue Content"}
</button>
        </div>
        <div className="cms-card">

  <h2>Floor Plan Image</h2>

  <div className="hero-grid">

    <div className="hero-item">

      <div className="hero-preview">

        {floorPlanImage ? (
          <img src={floorPlanImage} alt="" />
        ) : (
          <div className="placeholder">No Image</div>
        )}

      </div>

      <label>Upload Image</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFloorPlanImage}
      />

    </div>

  </div>

  <button
    className="save-btn"
    onClick={saveFloorPlanImage}
  >
    {floorPlanSaving ? "Saving..." : "Save Floor Plan Image"}
  </button>

</div>

<div className="cms-card">

  <h2>Floor Plan Content</h2>

  <label>Title</label>

  <input
    type="text"
    value={floorPlanContent.title}
    onChange={e =>
      setFloorPlanContent({
        ...floorPlanContent,
        title: e.target.value
      })
    }
  />

  <label>Subtitle</label>

  <textarea
    rows="3"
    value={floorPlanContent.subtitle}
    onChange={e =>
      setFloorPlanContent({
        ...floorPlanContent,
        subtitle: e.target.value
      })
    }
  />

  <label>Description</label>

  <textarea
    rows="6"
    value={floorPlanContent.description}
    onChange={e =>
      setFloorPlanContent({
        ...floorPlanContent,
        description: e.target.value
      })
    }
  />

  <button
    className="save-btn"
    onClick={saveFloorPlanContent}
  >
    {floorPlanContentSaving
      ? "Saving..."
      : "Save Floor Plan Content"}
  </button>

</div>
<div className="cms-card">

  <h2>Grand Hall Image</h2>

  <div className="hero-grid">

    <div className="hero-item">

      <div className="hero-preview">

        {grandHallImage ? (
          <img src={grandHallImage} alt="" />
        ) : (
          <div className="placeholder">No Image</div>
        )}

      </div>

      <label>Upload Image</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleGrandHallImage}
      />

    </div>

  </div>

  <button
    className="save-btn"
    onClick={saveGrandHallImage}
  >
    {grandHallSaving ? "Saving..." : "Save Grand Hall Image"}
  </button>

</div>

<div className="cms-card">

  <h2>Grand Hall Content</h2>

  <label>Title</label>

  <input
    type="text"
    value={grandHallContent.title}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        title: e.target.value
      })
    }
  />

  <label>Subtitle</label>

  <textarea
    rows="3"
    value={grandHallContent.subtitle}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        subtitle: e.target.value
      })
    }
  />

  <label>Description</label>

  <textarea
    rows="6"
    value={grandHallContent.description}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        description: e.target.value
      })
    }
  />

  <label>Button Text</label>

  <input
    type="text"
    value={grandHallContent.buttonText}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        buttonText: e.target.value
      })
    }
  />

  <label>Theatre Capacity</label>

  <input
    type="text"
    value={grandHallContent.theatre}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        theatre: e.target.value
      })
    }
  />

  <label>Classroom Capacity</label>

  <input
    type="text"
    value={grandHallContent.classroom}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        classroom: e.target.value
      })
    }
  />

  <label>Cocktail Capacity</label>

  <input
    type="text"
    value={grandHallContent.cocktail}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        cocktail: e.target.value
      })
    }
  />

  <label>Sit Down Capacity</label>

  <input
    type="text"
    value={grandHallContent.sitDown}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        sitDown: e.target.value
      })
    }
  />
    <label>Total Area</label>

  <input
    type="text"
    value={grandHallContent.totalArea}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        totalArea: e.target.value
      })
    }
  />

  <label>Length</label>

  <input
    type="text"
    value={grandHallContent.length}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        length: e.target.value
      })
    }
  />

  <label>Width</label>

  <input
    type="text"
    value={grandHallContent.width}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        width: e.target.value
      })
    }
  />

  <label>Height</label>

  <input
    type="text"
    value={grandHallContent.height}
    onChange={e =>
      setGrandHallContent({
        ...grandHallContent,
        height: e.target.value
      })
    }
  />

  <button
    className="save-btn"
    onClick={saveGrandHallContent}
  >
    {grandHallContentSaving
      ? "Saving..."
      : "Save Grand Hall Content"}
  </button>

</div>
<div className="cms-card">

  <h2>Small Hall Image</h2>

  <div className="hero-grid">

    <div className="hero-item">

      <div className="hero-preview">

        {smallHallImage ? (
          <img src={smallHallImage} alt="" />
        ) : (
          <div className="placeholder">No Image</div>
        )}

      </div>

      <label>Upload Image</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleSmallHallImage}
      />

    </div>

  </div>

  <button
    className="save-btn"
    onClick={saveSmallHallImage}
  >
    {smallHallSaving ? "Saving..." : "Save Small Hall Image"}
  </button>

</div>
<div className="cms-card">

  <h2>Small Hall Content</h2>

  <label>Title</label>

  <input
    type="text"
    value={smallHallContent.title}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        title: e.target.value
      })
    }
  />

  <label>Subtitle</label>

  <textarea
    rows="3"
    value={smallHallContent.subtitle}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        subtitle: e.target.value
      })
    }
  />

  <label>Description</label>

  <textarea
    rows="6"
    value={smallHallContent.description}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        description: e.target.value
      })
    }
  />

  <label>Button Text</label>

  <input
    type="text"
    value={smallHallContent.buttonText}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        buttonText: e.target.value
      })
    }
  />

  <label>Theatre Capacity</label>

  <input
    type="text"
    value={smallHallContent.theatre}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        theatre: e.target.value
      })
    }
  />

  <label>Classroom Capacity</label>

  <input
    type="text"
    value={smallHallContent.classroom}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        classroom: e.target.value
      })
    }
  />

  <label>Cocktail Capacity</label>

  <input
    type="text"
    value={smallHallContent.cocktail}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        cocktail: e.target.value
      })
    }
  />

  <label>Sit Down Capacity</label>

  <input
    type="text"
    value={smallHallContent.sitDown}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        sitDown: e.target.value
      })
    }
  />

  <label>Total Area</label>

  <input
    type="text"
    value={smallHallContent.totalArea}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        totalArea: e.target.value
      })
    }
  />

  <label>Length</label>

  <input
    type="text"
    value={smallHallContent.length}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        length: e.target.value
      })
    }
  />

  <label>Width</label>

  <input
    type="text"
    value={smallHallContent.width}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        width: e.target.value
      })
    }
  />

  <label>Height</label>

  <input
    type="text"
    value={smallHallContent.height}
    onChange={e =>
      setSmallHallContent({
        ...smallHallContent,
        height: e.target.value
      })
    }
  />

  <button
    className="save-btn"
    onClick={saveSmallHallContent}
  >
    {smallHallContentSaving
      ? "Saving..."
      : "Save Small Hall Content"}
  </button>

</div>
<div className="cms-card">

  <h2>Lawn Image</h2>

  <div className="hero-grid">

    <div className="hero-item">

      <div className="hero-preview">

        {lawnImage ? (
          <img src={lawnImage} alt="" />
        ) : (
          <div className="placeholder">No Image</div>
        )}

      </div>

      <label>Upload Image</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleLawnImage}
      />

    </div>

  </div>

  <button
    className="save-btn"
    onClick={saveLawnImage}
  >
    {lawnSaving ? "Saving..." : "Save Lawn Image"}
  </button>

</div>

<div className="cms-card">

  <h2>Lawn Content</h2>

  <label>Title</label>

  <input
    type="text"
    value={lawnContent.title}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        title: e.target.value
      })
    }
  />

  <label>Subtitle</label>

  <textarea
    rows="3"
    value={lawnContent.subtitle}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        subtitle: e.target.value
      })
    }
  />

  <label>Description</label>

  <textarea
    rows="6"
    value={lawnContent.description}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        description: e.target.value
      })
    }
  />

  <label>Button Text</label>

  <input
    type="text"
    value={lawnContent.buttonText}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        buttonText: e.target.value
      })
    }
  />

  <label>Theatre Capacity</label>

  <input
    type="text"
    value={lawnContent.theatre}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        theatre: e.target.value
      })
    }
  />

  <label>Classroom Capacity</label>

  <input
    type="text"
    value={lawnContent.classroom}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        classroom: e.target.value
      })
    }
  />

  {/* <label>Cocktail Capacity</label>

  <input
    type="text"
    value={lawnContent.cocktail}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        cocktail: e.target.value
      })
    }
  />

  <label>Sit Down Capacity</label>

  <input
    type="text"
    value={lawnContent.sitDown}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        sitDown: e.target.value
      })
    }
  /> */}

  <label>Total Area</label>

  <input
    type="text"
    value={lawnContent.totalArea}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        totalArea: e.target.value
      })
    }
  />

  <label>Length</label>

  <input
    type="text"
    value={lawnContent.length}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        length: e.target.value
      })
    }
  />

  <label>Width</label>

  <input
    type="text"
    value={lawnContent.width}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        width: e.target.value
      })
    }
  />

  {/* <label>Height</label>

  <input
    type="text"
    value={lawnContent.height}
    onChange={e =>
      setLawnContent({
        ...lawnContent,
        height: e.target.value
      })
    }
  /> */}

  <button
    className="save-btn"
    onClick={saveLawnContent}
  >
    {lawnContentSaving
      ? "Saving..."
      : "Save Lawn Content"}
  </button>

</div>
      </div>
    </DashboardLayout>
  );
}
