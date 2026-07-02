import "./Home.css";
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";

export default function Home() {

    const [loading, setLoading] = useState({
  hero: false,
  venue: false,
  atlantiis: false,
  wedding: false,
  business: false,
  review: false,
  magic: false,
});

    const [heroImages, setHeroImages] = useState(
        Array.from({ length: 6 }, () => ({
            image: "",
            alt: "",
            file: null,
            preview: ""
        }))
    );
    const [venueImages, setVenueImages] = useState(
        Array.from({ length: 4 }, () => ({
            image: "",
            title: "",
            description: "",
            alt: "",
            file: null,
            preview: ""
        }))
    );
    const [weddingCards, setWeddingCards] = useState(
        Array.from({ length: 4 }, () => ({
            video: "",
            number: "",
            title: "",
            description: "",
            file: null,
            preview: ""
        }))
    );

    const [businessImages, setBusinessImages] = useState(
        Array.from({ length: 2 }, () => ({
            image: "",
            alt: "",
            file: null,
            preview: ""
        }))
    );
    const [atlantiisImage, setAtlantiisImage] = useState({

    image: "",

    file: null,

    preview: ""

});
    const [reviews, setReviews] = useState(
        Array.from({ length: 6 }, () => ({
            author: "",
            text: ""
        }))
    );
    const [magicVideo, setMagicVideo] = useState({

    video: "",

    file: null,

    preview: ""

});
    useEffect(() => {
        getHome();
    }, []);

    const getHome = async () => {

        try {

            const { data } = await api.get("/home");

            // Hero Images
            const hero = Array.from({ length: 6 }, (_, index) => {

                const item = data.heroImages?.[index];

                return {

                    image: item?.image || "",

                    alt: item?.alt || "",
                    preview: item?.image || "",

                    file: null

                };

            });

            setHeroImages(hero);

            // Venue Section
            const venue = Array.from({ length: 4 }, (_, index) => {

                const item = data.venueSection?.[index];

                return {

                    image: item?.image || "",

                    title: item?.title || "",

                    description: item?.description || "",

                    alt: item?.alt || "",

                    preview: item?.image || "",

                    file: null

                };

            });

            setVenueImages(venue);
            const wedding = Array.from({ length: 4 }, (_, index) => {

                const item = data.weddingSection?.[index];

                return {

                    video: item?.video || "",

                    number: item?.number || "",

                    title: item?.title || "",

                    description: item?.description || "",

                    preview: item?.video || "",

                    file: null

                };

            });

            setWeddingCards(wedding);
            const business = Array.from({ length: 2 }, (_, index) => {

                const item = data.businessSection?.[index];

                return {

                    image: item?.image || "",

                    alt: item?.alt || "",

                    preview: item?.image || "",

                    file: null

                };

            });

            setBusinessImages(business);
setAtlantiisImage({

    image: data.atlantiisSection?.image || "",

    preview: data.atlantiisSection?.image || "",

    file: null

});
            setMagicVideo({

    video: data.magicSection?.video || "",

    preview: data.magicSection?.video || "",

    file: null

});
            const reviewList = Array.from({ length: 20 }, (_, index) => {

                const item = data.reviewSection?.[index];

                return {

                    author: item?.author || "",

                    text: item?.text || ""

                };

            });

            setReviews(reviewList);

        }



        catch (err) {

            console.log(err);

        }

    };



    const imageChange = (index, file) => {

        const list = [...heroImages];

        list[index].file = file;

        list[index].preview = URL.createObjectURL(file);

        setHeroImages(list);

    };

    const altChange = (index, value) => {

        const list = [...heroImages];

        list[index].alt = value;

        setHeroImages(list);

    };
    const venueImageChange = (index, file) => {

        const list = [...venueImages];

        list[index].file = file;

        list[index].preview = URL.createObjectURL(file);

        setVenueImages(list);

    };

    const venueInputChange = (index, field, value) => {

        const list = [...venueImages];

        list[index][field] = value;

        setVenueImages(list);


    };
    const weddingVideoChange = (index, file) => {

        const list = [...weddingCards];

        list[index].file = file;

        list[index].preview = URL.createObjectURL(file);

        setWeddingCards(list);

    };

    const weddingInputChange = (index, field, value) => {

        const list = [...weddingCards];

        list[index][field] = value;

        setWeddingCards(list);

    };
    const businessImageChange = (index, file) => {

        const list = [...businessImages];

        list[index].file = file;

        list[index].preview = URL.createObjectURL(file);

        setBusinessImages(list);

    };
  const atlantiisImageChange = (file) => {

    setAtlantiisImage({

        ...atlantiisImage,

        file,

        preview: URL.createObjectURL(file)

    });

};
    const businessAltChange = (index, value) => {

        const list = [...businessImages];

        list[index].alt = value;

        setBusinessImages(list);

    };
    const magicVideoChange = (file) => {

    setMagicVideo({

        ...magicVideo,

        file,

        preview: URL.createObjectURL(file)

    });

};

const saveMagic = async () => {

    try {

       setLoading(prev => ({
  ...prev,
  magic: true
}));

        const formData = new FormData();

        if (magicVideo.file) {

            formData.append(

                "magicVideo",

                magicVideo.file

            );

        }

        await api.put(

            "/home/magic",

            formData

        );

        alert("Magic Video Updated");

        getHome();

    }

    catch {

        alert("Update Failed");

    }

    setLoading(prev => ({
  ...prev,
  magic: false
}));

};
    const reviewChange = (index, field, value) => {

        const list = [...reviews];

        list[index][field] = value;

        setReviews(list);

    };
    const saveHero = async () => {

        try {

            setLoading(prev => ({
  ...prev,
  hero: true
}));

            const formData = new FormData();

            heroImages.forEach((item, index) => {

                if (item.file) {

                    formData.append("images", item.file);

                }

                formData.append(
                    `alt${index}`,
                    item.alt
                );

            });

            await api.put("/home", formData);

            alert("Hero Updated");

            getHome();


        } catch (err) {

            alert("Update Failed");

        }

      setLoading(prev => ({
  ...prev,
  hero: false
}));

    };

    const saveVenue = async () => {


        try {

            setLoading(prev => ({
  ...prev,
  venue: true
}));

            const formData = new FormData();

            venueImages.forEach((item, index) => {

                if (item.file) {

                    formData.append(`venue${index}`, item.file);

                }

                formData.append(`title${index}`, item.title);

                formData.append(`description${index}`, item.description);

                formData.append(`alt${index}`, item.alt);

            });

            await api.put("/home/venue", formData);

            alert("Venue Updated");

            getHome();

        }

        catch (err) {

            alert("Update Failed");

        }

       setLoading(prev => ({
  ...prev,
  venue: false
}));

    };
    const saveWedding = async () => {

        try {

           setLoading(prev => ({
  ...prev,
  wedding: true
}));

            const formData = new FormData();

            weddingCards.forEach((item, index) => {

                if (item.file) {

                    formData.append(`video${index}`, item.file);

                }

                formData.append(`number${index}`, item.number);

                formData.append(`title${index}`, item.title);

                formData.append(`description${index}`, item.description);

            });

            await api.put("/home/wedding", formData);

            alert("Wedding Updated");

            getHome();

        }

        catch {

            alert("Update Failed");

        }

        setLoading(prev => ({
  ...prev,
  wedding: false
}));

    };
    const saveBusiness = async () => {

        try {

            setLoading(prev => ({
  ...prev,
  business: true
}));

            const formData = new FormData();

            businessImages.forEach((item, index) => {

                if (item.file) {

                    formData.append(`business${index}`, item.file);

                }

                formData.append(`alt${index}`, item.alt);

            });

            await api.put("/home/business", formData);

            alert("Business Updated");

            getHome();

        }

        catch {

            alert("Update Failed");

        }

        setLoading(prev => ({
  ...prev,
  business: false
}));

    };
    const saveAtlantiis = async () => {

    try {

        setLoading(prev => ({

            ...prev,

            atlantiis: true

        }));

        const formData = new FormData();

        if (atlantiisImage.file) {

            formData.append(

                "atlantiis",

                atlantiisImage.file

            );

        }

        await api.put(

            "/home/atlantiis",

            formData

        );

        alert("Atlantiis Updated");

        getHome();

    }

    catch {

        alert("Update Failed");

    }

    finally {

        setLoading(prev => ({

            ...prev,

            atlantiis: false

        }));

    }

};
    const saveReviews = async () => {

        try {

            setLoading(prev => ({
  ...prev,
  review: true
}));

            const payload = reviews.reduce((acc, item, index) => {
                acc[`author${index}`] = item.author;
                acc[`text${index}`] = item.text;
                return acc;
            }, {});

            await api.put("/home/review", payload);

            alert("Reviews Updated");

            getHome();

        }

        catch (err) {

            console.log(err);

            alert("Update Failed");

        }

        finally {

            setLoading(prev => ({
  ...prev,
  review: false
}));

        }

    };

    return (

        <DashboardLayout>

            <div className="home-page">

                <h1>

                    Hero Slider CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Landing Slider Images

                    </h2>

                    <div className="hero-grid">

                        {

                            heroImages.map((item, index) => (

                                <div
                                    className="hero-item"
                                    key={index}
                                >

                                    <div className="hero-preview">

                                        {

                                            item.preview

                                                ?

                                                <img
                                                    src={item.preview}
                                                    alt=""
                                                />

                                                :

                                                <div className="placeholder">

                                                    No Image

                                                </div>

                                        }

                                    </div>

                                    <label>

                                        Image {index + 1}

                                    </label>

                                    <input

                                        type="file"

                                        accept="image/*"

                                        onChange={(e) =>
                                            imageChange(
                                                index,
                                                e.target.files[0]
                                            )
                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Alt Text"

                                        value={item.alt}

                                        onChange={(e) =>
                                            altChange(
                                                index,
                                                e.target.value
                                            )
                                        }

                                    />

                                </div>

                            ))

                        }

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveHero}

                    >

                        {

                     loading.hero
?
"Saving..."
:
"Save Hero Slider"

                        }

                    </button>

                </div>
                <div className="cms-card">

                    <h2>

                        Venue Section

                    </h2>

                    <div className="hero-grid">

                        {

                            venueImages.map((item, index) => (

                                <div
                                    className="hero-item"
                                    key={index}
                                >

                                    <div className="hero-preview">

                                        {

                                            item.preview

                                                ?

                                                <img
                                                    src={item.preview}
                                                    alt=""
                                                />

                                                :

                                                <div className="placeholder">

                                                    No Image

                                                </div>

                                        }

                                    </div>

                                    <label>

                                        Venue Image {index + 1}

                                    </label>

                                    <input

                                        type="file"

                                        accept="image/*"

                                        onChange={(e) =>

                                            venueImageChange(

                                                index,

                                                e.target.files[0]

                                            )

                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Title"

                                        value={item.title}

                                        onChange={(e) =>

                                            venueInputChange(

                                                index,

                                                "title",

                                                e.target.value

                                            )

                                        }

                                    />

                                    <textarea

                                        rows="4"

                                        placeholder="Description"

                                        value={item.description}

                                        onChange={(e) =>

                                            venueInputChange(

                                                index,

                                                "description",

                                                e.target.value

                                            )

                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Alt Text"

                                        value={item.alt}

                                        onChange={(e) =>

                                            venueInputChange(

                                                index,

                                                "alt",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>

                            ))

                        }

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveVenue}

                    >

                        {

                      loading.venue
?
"Saving..."
:
"Save Venue"

                        }

                    </button>

                </div>
                <div className="cms-card">

                    <h2>

                        Atlantiis Section

                    </h2>

                    <div className="hero-grid">

                        <div className="hero-item">

                            <div className="hero-preview">

                                {

                                    atlantiisImage.preview

                                        ?

                                        <img

                                            src={atlantiisImage.preview}

                                            alt=""

                                        />

                                        :

                                        <div className="placeholder">

                                            No Image

                                        </div>

                                }

                            </div>

                            <label>

                                Atlantiis Image

                            </label>

                            <input

                                type="file"

                                accept="image/*"

                                onChange={(e) =>

                                    atlantiisImageChange(

                                        e.target.files[0]

                                    )

                                }

                            />

                        </div>

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveAtlantiis}

                    >

                        {

                            loading.atlantiis

                                ?

                                "Saving..."

                                :

                                "Save Atlantiis"

                        }

                    </button>

                </div>
                <div className="cms-card">

                    <h2>Wedding Section</h2>

                    <div className="hero-grid">

                        {

                            weddingCards.map((item, index) => (

                                <div
                                    className="hero-item"
                                    key={index}
                                >

                                    <div className="hero-preview">

                                        {

                                            item.preview

                                                ?

                                                <video

                                                    src={item.preview}

                                                    controls

                                                    style={{
                                                        width: "100%",
                                                        borderRadius: "10px"
                                                    }}

                                                />

                                                :

                                                <div className="placeholder">

                                                    No Video

                                                </div>

                                        }

                                    </div>

                                    <label>

                                        Wedding Video {index + 1}

                                    </label>

                                    <input

                                        type="file"

                                        accept="video/*"

                                        onChange={(e) =>

                                            weddingVideoChange(

                                                index,

                                                e.target.files[0]

                                            )

                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Number"

                                        value={item.number}

                                        onChange={(e) =>

                                            weddingInputChange(

                                                index,

                                                "number",

                                                e.target.value

                                            )

                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Title"

                                        value={item.title}

                                        onChange={(e) =>

                                            weddingInputChange(

                                                index,

                                                "title",

                                                e.target.value

                                            )

                                        }

                                    />

                                    <textarea

                                        rows="4"

                                        placeholder="Description"

                                        value={item.description}

                                        onChange={(e) =>

                                            weddingInputChange(

                                                index,

                                                "description",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>

                            ))

                        }

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveWedding}

                    >

                        {

                         loading.wedding
?
"Saving..."
:
"Save Wedding"

                        }

                    </button>

                </div>
                <div className="cms-card">

                    <h2>

                        Business Event Images

                    </h2>

                    <div className="hero-grid">

                        {

                            businessImages.map((item, index) => (

                                <div
                                    className="hero-item"
                                    key={index}
                                >

                                    <div className="hero-preview">

                                        {

                                            item.preview

                                                ?

                                                <img

                                                    src={item.preview}

                                                    alt=""

                                                />

                                                :

                                                <div className="placeholder">

                                                    No Image

                                                </div>

                                        }

                                    </div>

                                    <label>

                                        Business Image {index + 1}

                                    </label>

                                    <input

                                        type="file"

                                        accept="image/*"

                                        onChange={(e) =>

                                            businessImageChange(

                                                index,

                                                e.target.files[0]

                                            )

                                        }

                                    />

                                    <input

                                        type="text"

                                        placeholder="Alt Text"

                                        value={item.alt}

                                        onChange={(e) =>

                                            businessAltChange(

                                                index,

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>

                            ))

                        }

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveBusiness}

                    >

                        {

                           loading.business
?
"Saving..."
:
"Save Business"

                        }

                    </button>

                </div>
                <div className="cms-card">

                    <h2>

                        Customer Reviews

                    </h2>

                    <div className="hero-grid">

                        {

                            reviews.map((item, index) => (

                                <div
                                    className="hero-item"
                                    key={index}
                                >

                                    <label>

                                        Customer Name

                                    </label>

                                    <input

                                        type="text"

                                        placeholder="Customer Name"

                                        value={item.author}

                                        onChange={(e) =>

                                            reviewChange(

                                                index,

                                                "author",

                                                e.target.value

                                            )

                                        }

                                    />

                                    <label>

                                        Review

                                    </label>

                                    <textarea

                                        rows="5"

                                        placeholder="Customer Review"

                                        value={item.text}

                                        onChange={(e) =>

                                            reviewChange(

                                                index,

                                                "text",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>

                            ))

                        }

                    </div>

                    <button

                        className="save-btn"

                        onClick={saveReviews}

                    >

                        {

                        loading.review
?
"Saving..."
:
"Save Reviews"

                        }

                    </button>

                </div>
                <div className="cms-card">

    <h2>

        Magic Video

    </h2>

    <div className="hero-item">

        <div className="hero-preview">

            {

                magicVideo.preview

                ?

                <video

                    src={magicVideo.preview}

                    controls

                    style={{

                        width: "100%",

                        borderRadius: "10px"

                    }}

                />

                :

                <div className="placeholder">

                    No Video

                </div>

            }

        </div>

        <input

            type="file"

            accept="video/*"

            onChange={(e)=>

                magicVideoChange(

                    e.target.files[0]

                )

            }

        />

    </div>

    <button

        className="save-btn"

        onClick={saveMagic}

    >

        {

            loading.magic
?
"Saving..."
:
"Save Magic Video"

        }

    </button>

</div>
            </div>

        </DashboardLayout>

    );

}