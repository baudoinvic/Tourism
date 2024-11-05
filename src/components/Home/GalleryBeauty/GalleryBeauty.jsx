


import "./GalleryBeauty.css";
import { FaUserGroup } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const GalleryBeauty = () => {
  // Sample data for demonstration
  const items = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0zsfdywnyhJKo7YS7y8iBrODWpEOYSgx2CXsaGvuLNGKpZY8DxpCIOiabEJRt",
      location: "Paris, France",
      price: 1200,
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCSdYI0swJSFAgg4qkdhuWFYny56rRTFBz18yWE24l7IKlVnS3CFIMQwP1SOgZ",
      location: "Rome, Italy",
      price: 950,
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxcaEpnZFd0CWfGVJzU20rMVqL4_2YpKA5HDDRWSGQKXrlxH5PqqpYkgSX5MSL",
      location: "New York, USA",
      price: 1500,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4ueh5pMa4K93bcfqa5rE57As9_hOnPxeAN6ZzEj0rfU6NfnRbCkXep0NR3t9",
      location: "Tokyo, Japan",
      price: 1800,
    },
  ];

  return (
    <div className="gallery-beauty">
      {items.map((item, index) => (
        <div className="gallery-item-beauty" key={index}>
          <img
            src={item.image}
            alt="gallery-beauty"
            className="gallery-image"
          />
          <div className="content-beauty">
            <span className="location-beauty">{item.location}</span>
            <h2>
              Holiday Planners is a World Leading Online Tour Booking Platform
            </h2>
            <p className="description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia...
            </p>
            <div className="details-beauty">
              <MdAccessTimeFilled className="icons" />
              <div className="duration">
                <span>Duration</span>
                <p>7 days 8 hours</p>
              </div>
              <FaUserGroup className="icons" />
              <div className="group-size">
                <span>Group Size</span>
                <p>50+ People</p>
              </div>
            </div>
            <div className="price-button-container-beauty">
              <p className="price-beauty">${item.price}</p>
              <button className="book-now-beauty">BOOK NOW</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryBeauty;
