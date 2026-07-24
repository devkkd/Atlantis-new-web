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
    const [awardsImages, setAwardsImages] = useState(
        Array.from({ length: 4 }, () => ({
            image: "",
            alt: "",
            file: null,
            preview: ""
        }))
    );
    const [atlantiisImage, setAtlantiisImage] = useState({
        title: "",
        subtitle: "",
        description: "",
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
    const [celebration, setCelebration] = useState({

        title1: "",

        subtitle1: "",

        title2: "",

        subtitle2: ""

    });
    const [weddingContent, setWeddingContent] = useState({

        title: "",

        subtitle: "",

        description: ""

    });
    const [businessContent, setBusinessContent] = useState({

        title: "",

        subtitle: "",

        description: ""

    });
    const [awardsContent, setAwardsContent] = useState({

        title: "",

        subtitle: ""

    });
    const [realContent, setRealContent] = useState({

        title: "",

        subtitle: "",

        description: "",

        ratingTitle: "",

        trustpilotTitle: ""

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
            const awards = Array.from({ length: 4 }, (_, index) => {

                const item = data.awardsSection?.[index];

                return {
                    image: item?.image || "",
                    alt: item?.alt || "",
                    preview: item?.image || "",
                    file: null
                };

            });

            setAwardsImages(awards);
            setAtlantiisImage({
                title: data.atlantiisSection?.title || "",
                subtitle: data.atlantiisSection?.subtitle || "",
                description: data.atlantiisSection?.description || "",
                image: data.atlantiisSection?.image || "",
                preview: data.atlantiisSection?.image || "",
                file: null
            });
            setMagicVideo({

                video: data.magicSection?.video || "",

                preview: data.magicSection?.video || "",

                file: null

            });
            setCelebration({

                title1: data.celebrationSection?.title1 || "",

                subtitle1: data.celebrationSection?.subtitle1 || "",

                title2: data.celebrationSection?.title2 || "",

                subtitle2: data.celebrationSection?.subtitle2 || ""

            });
            setWeddingContent({

                title: data.weddingContent?.title || "",

                subtitle: data.weddingContent?.subtitle || "",

                description: data.weddingContent?.description || ""

            });
            setBusinessContent({

                title: data.businessContent?.title || "",

                subtitle: data.businessContent?.subtitle || "",

                description: data.businessContent?.description || ""

            });
            setAwardsContent({

                title: data.awardsContent?.title || "",

                subtitle: data.awardsContent?.subtitle || ""

            });
            setRealContent({

                title: data.realContent?.title || "",

                subtitle: data.realContent?.subtitle || "",

                description: data.realContent?.description || "",

                ratingTitle: data.realContent?.ratingTitle || "",

                trustpilotTitle: data.realContent?.trustpilotTitle || ""

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
    const awardsImageChange = (index, file) => {

        const list = [...awardsImages];

        list[index].file = file;

        list[index].preview = URL.createObjectURL(file);

        setAwardsImages(list);

    };

    const awardsAltChange = (index, value) => {

        const list = [...awardsImages];

        list[index].alt = value;

        setAwardsImages(list);

    };

    const saveAwards = async () => {

        try {

            const formData = new FormData();

            awardsImages.forEach((item, index) => {

                if (item.file) {

                    formData.append(`awards${index}`, item.file);

                }

                formData.append(`alt${index}`, item.alt);

            });

            await api.put("/home/awards", formData);

            alert("Awards Updated");

            getHome();

        } catch {

            alert("Update Failed");

        }

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

                    formData.append(`image${index}`, item.file);

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
            formData.append("title", atlantiisImage.title);
            formData.append("subtitle", atlantiisImage.subtitle);
            formData.append("description", atlantiisImage.description);
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
    const saveWeddingContent = async () => {

        try {

            await api.put("/home/wedding-content", weddingContent);

            alert("Wedding Content Updated");

            getHome();

        } catch {

            alert("Update Failed");

        }

    };
    const saveBusinessContent = async () => {

        try {

            await api.put("/home/business-content", businessContent);

            alert("Business Content Updated");

            getHome();

        } catch {

            alert("Update Failed");

        }

    };
    const saveAwardsContent = async () => {

        try {

            await api.put("/home/awards-content", awardsContent);

            alert("Awards Content Updated");

            getHome();

        } catch {

            alert("Update Failed");

        }

    };
    const saveRealContent = async () => {

        try {

            await api.put("/home/real-content", realContent);

            alert("Real Content Updated");

            getHome();

        } catch {

            alert("Update Failed");

        }

    };
    const saveCelebration = async () => {

        try {

            await api.put("/home/celebration", celebration);

            alert("Celebration Updated");

            getHome();

        } catch {

            alert("Update Failed");

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

                    <h2>Celebration Section</h2>

                    <label>Title 1</label>

                    <input
                        type="text"
                        value={celebration.title1}
                        onChange={(e) =>
                            setCelebration({
                                ...celebration,
                                title1: e.target.value
                            })
                        }
                    />

                    <label>Subtitle 1</label>

                    <textarea
                        rows="4"
                        value={celebration.subtitle1}
                        onChange={(e) =>
                            setCelebration({
                                ...celebration,
                                subtitle1: e.target.value
                            })
                        }
                    />

                    <label>Title 2</label>

                    <input
                        type="text"
                        value={celebration.title2}
                        onChange={(e) =>
                            setCelebration({
                                ...celebration,
                                title2: e.target.value
                            })
                        }
                    />

                    <label>Subtitle 2</label>

                    <textarea
                        rows="4"
                        value={celebration.subtitle2}
                        onChange={(e) =>
                            setCelebration({
                                ...celebration,
                                subtitle2: e.target.value
                            })
                        }
                    />

                    <button
                        className="save-btn"
                        onClick={saveCelebration}
                    >
                        Save Celebration
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

                            <label>Title</label>

                            <input
                                type="text"
                                value={atlantiisImage.title}
                                onChange={(e) =>
                                    setAtlantiisImage({
                                        ...atlantiisImage,
                                        title: e.target.value
                                    })
                                }
                            />

                            <label>Subtitle</label>

                            <input
                                type="text"
                                value={atlantiisImage.subtitle}
                                onChange={(e) =>
                                    setAtlantiisImage({
                                        ...atlantiisImage,
                                        subtitle: e.target.value
                                    })
                                }
                            />

                            <label>Description</label>

                            <textarea
                                rows="4"
                                value={atlantiisImage.description}
                                onChange={(e) =>
                                    setAtlantiisImage({
                                        ...atlantiisImage,
                                        description: e.target.value
                                    })
                                }
                            />

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

                    <h2>Wedding Content</h2>

                    <label>Title</label>

                    <input
                        type="text"
                        value={weddingContent.title}
                        onChange={(e) =>
                            setWeddingContent({
                                ...weddingContent,
                                title: e.target.value
                            })
                        }
                    />

                    <label>Subtitle</label>

                    <textarea
                        rows="4"
                        value={weddingContent.subtitle}
                        onChange={(e) =>
                            setWeddingContent({
                                ...weddingContent,
                                subtitle: e.target.value
                            })
                        }
                    />

                    <label>Description</label>

                    <textarea
                        rows="5"
                        value={weddingContent.description}
                        onChange={(e) =>
                            setWeddingContent({
                                ...weddingContent,
                                description: e.target.value
                            })
                        }
                    />

                    <button
                        className="save-btn"
                        onClick={saveWeddingContent}
                    >
                        Save Wedding Content
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

                    <h2>Business Event Content</h2>

                    <label>Title</label>

                    <input
                        type="text"
                        value={businessContent.title}
                        onChange={(e) =>
                            setBusinessContent({
                                ...businessContent,
                                title: e.target.value
                            })
                        }
                    />

                    <label>Subtitle</label>

                    <textarea
                        rows="4"
                        value={businessContent.subtitle}
                        onChange={(e) =>
                            setBusinessContent({
                                ...businessContent,
                                subtitle: e.target.value
                            })
                        }
                    />

                    <label>Description</label>

                    <textarea
                        rows="5"
                        value={businessContent.description}
                        onChange={(e) =>
                            setBusinessContent({
                                ...businessContent,
                                description: e.target.value
                            })
                        }
                    />

                    <button
                        className="save-btn"
                        onClick={saveBusinessContent}
                    >
                        Save Business Content
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

                    <h2>Awards Content</h2>

                    <label>Title</label>

                    <input
                        type="text"
                        value={awardsContent.title}
                        onChange={(e) =>
                            setAwardsContent({
                                ...awardsContent,
                                title: e.target.value
                            })
                        }
                    />

                    <label>Subtitle</label>

                    <textarea
                        rows="4"
                        value={awardsContent.subtitle}
                        onChange={(e) =>
                            setAwardsContent({
                                ...awardsContent,
                                subtitle: e.target.value
                            })
                        }
                    />

                    <button
                        className="save-btn"
                        onClick={saveAwardsContent}
                    >
                        Save Awards Content
                    </button>

                </div>
                <div className="cms-card">

                    <h2>Awards Logos</h2>

                    <div className="hero-grid">

                        {awardsImages.map((item, index) => (

                            <div className="hero-item" key={index}>

                                <div className="hero-preview">

                                    {item.preview ? (

                                        <img src={item.preview} alt="" />

                                    ) : (

                                        <div className="placeholder">

                                            No Image

                                        </div>

                                    )}

                                </div>

                                <label>

                                    Award Logo {index + 1}

                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        awardsImageChange(index, e.target.files[0])
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Alt Text"
                                    value={item.alt}
                                    onChange={(e) =>
                                        awardsAltChange(index, e.target.value)
                                    }
                                />

                            </div>

                        ))}

                    </div>

                    <button
                        className="save-btn"
                        onClick={saveAwards}
                    >
                        Save Awards
                    </button>

                </div>
                <div className="cms-card">

    <h2>Real Experiences Content</h2>

    <label>Title</label>

    <input
        type="text"
        value={realContent.title}
        onChange={(e) =>
            setRealContent({
                ...realContent,
                title: e.target.value
            })
        }
    />

    <label>Subtitle</label>

    <textarea
        rows="3"
        value={realContent.subtitle}
        onChange={(e) =>
            setRealContent({
                ...realContent,
                subtitle: e.target.value
            })
        }
    />

    <label>Description</label>

    <textarea
        rows="5"
        value={realContent.description}
        onChange={(e) =>
            setRealContent({
                ...realContent,
                description: e.target.value
            })
        }
    />

    <label>Rating Title</label>

    <input
        type="text"
        value={realContent.ratingTitle}
        onChange={(e) =>
            setRealContent({
                ...realContent,
                ratingTitle: e.target.value
            })
        }
    />

    <label>Trustpilot Title</label>

    <input
        type="text"
        value={realContent.trustpilotTitle}
        onChange={(e) =>
            setRealContent({
                ...realContent,
                trustpilotTitle: e.target.value
            })
        }
    />

    <button
        className="save-btn"
        onClick={saveRealContent}
    >
        Save Real Content
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

                            onChange={(e) =>

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