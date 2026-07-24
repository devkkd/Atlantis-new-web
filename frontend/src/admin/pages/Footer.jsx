import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import "./Footer.css";

export default function Footer() {

    const [logo, setLogo] = useState("");
    const [file, setFile] = useState(null);

    const [home, setHome] = useState("");
    const [venue, setVenue] = useState("");
    const [services, setServices] = useState("");
    const [gallery, setGallery] = useState("");
    const [blog, setBlog] = useState("");

    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [copyright, setCopyright] = useState("");
    const [poweredBy, setPoweredBy] = useState("");
    const [poweredByLink, setPoweredByLink] = useState("");

    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [pinterest, setPinterest] = useState("");

    const [bottomText, setBottomText] = useState("");

    const [saving, setSaving] = useState(false);
    const [contentSaving, setContentSaving] = useState(false);

    useEffect(() => {

        getFooter();

    }, []);

    const getFooter = async () => {

        try {

            const { data } = await api.get("/footer");

            if (data.success) {

                setLogo(data.footer.logo);

                setHome(data.footer.home);
                setVenue(data.footer.venue);
                setServices(data.footer.services);
                setGallery(data.footer.gallery);
                setBlog(data.footer.blog);

                setDescription(data.footer.description);
                setAddress(data.footer.address);

                setPhone(data.footer.phone);
                setEmail(data.footer.email);

                setCopyright(data.footer.copyright);
                setPoweredBy(data.footer.poweredBy);
                setPoweredByLink(data.footer.poweredByLink);

                setFacebook(data.footer.facebook);
                setInstagram(data.footer.instagram);
                setYoutube(data.footer.youtube);
                setPinterest(data.footer.pinterest);

                setBottomText(data.footer.bottomText);

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleLogo = (e) => {

        const selected = e.target.files[0];

        if (!selected) return;

        setFile(selected);

        setLogo(URL.createObjectURL(selected));

    };

    const saveLogo = async () => {

        try {

            setSaving(true);

            const formData = new FormData();

            if (file) {

                formData.append("image", file);

            }

            await api.put("/footer/image", formData);

            await getFooter();

            alert("Footer Logo Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Something Went Wrong");

        }

        finally {

            setSaving(false);

        }

    };

    const saveContent = async () => {

        try {

            setContentSaving(true);

            await api.put("/footer/content", {

                home,
                venue,
                services,
                gallery,
                blog,

                description,
                address,

                phone,
                email,

                copyright,
                poweredBy,
                poweredByLink,

                facebook,
                instagram,
                youtube,
                pinterest,

                bottomText

            });

            await getFooter();

            alert("Footer Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Something Went Wrong");

        }

        finally {

            setContentSaving(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="footer-page">

                <h1>

                    Footer CMS

                </h1>

                <div className="cms-card">

                    <h2>

                        Footer Logo

                    </h2>

                    <div className="hero-grid">

                        <div className="hero-item">

                            <div className="hero-preview">

                                {

                                    logo

                                        ?

                                        <img
                                            src={logo}
                                            alt=""
                                        />

                                        :

                                        <div className="placeholder">

                                            No Logo

                                        </div>

                                }

                            </div>

                            <label>

                                Upload Logo

                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogo}
                            />

                        </div>

                    </div>

                    <button
                        className="save-btn"
                        onClick={saveLogo}
                    >

                        {

                            saving

                                ?

                                "Saving..."

                                :

                                "Save Logo"

                        }

                    </button>

                </div>

                <div className="cms-card">
                   <h2>Footer Content</h2>

<label>Home</label>
<input
    type="text"
    value={home}
    onChange={(e) => setHome(e.target.value)}
/>

<label>Venue</label>
<input
    type="text"
    value={venue}
    onChange={(e) => setVenue(e.target.value)}
/>

<label>Services</label>
<input
    type="text"
    value={services}
    onChange={(e) => setServices(e.target.value)}
/>

<label>Gallery</label>
<input
    type="text"
    value={gallery}
    onChange={(e) => setGallery(e.target.value)}
/>

<label>Blog</label>
<input
    type="text"
    value={blog}
    onChange={(e) => setBlog(e.target.value)}
/>

<label>Description</label>
<textarea
    rows={5}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
/>

<label>Address</label>
<textarea
    rows={5}
    value={address}
    onChange={(e) => setAddress(e.target.value)}
/>

<label>Phone</label>
<input
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
/>

<label>Email</label>
<input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>

<label>Copyright</label>
<input
    type="text"
    value={copyright}
    onChange={(e) => setCopyright(e.target.value)}
/>

{/* <label>Powered By</label>
<input
    type="text"
    value={poweredBy}
    onChange={(e) => setPoweredBy(e.target.value)}
/>

<label>Powered By Link</label>
<input
    type="text"
    value={poweredByLink}
    onChange={(e) => setPoweredByLink(e.target.value)}
/> */}

<label>Facebook</label>
<input
    type="text"
    value={facebook}
    onChange={(e) => setFacebook(e.target.value)}
/>

<label>Instagram</label>
<input
    type="text"
    value={instagram}
    onChange={(e) => setInstagram(e.target.value)}
/>

<label>Youtube</label>
<input
    type="text"
    value={youtube}
    onChange={(e) => setYoutube(e.target.value)}
/>

<label>Pinterest</label>
<input
    type="text"
    value={pinterest}
    onChange={(e) => setPinterest(e.target.value)}
/>

<label>Bottom Text</label>
<input
    type="text"
    value={bottomText}
    onChange={(e) => setBottomText(e.target.value)}
/>

<button
    className="save-btn"
    onClick={saveContent}
>
    {
        contentSaving
            ? "Saving..."
            : "Save Footer"
    }
</button>

</div>

</div>

</DashboardLayout>

);

}

