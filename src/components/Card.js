// 1. making Card compo and go nd import in app.js
import './Card.css'

// 9. pass Fatchdata as a prop---------------------------
// 10. & acceess obj frm object.js through Fatchdata------------------
export default function Card({ Fatchdata }) {
    // console.log(Fatchdata);
    return (
        <>
            <div className="parent">
                <div className="MobileCintainer">
                    <div className="Mobile-img">
                        <img src={Fatchdata.image} alt="" />
                    </div>
                    <div className="MobileInfo">
                        <div className="Mobile-name">{Fatchdata.name}</div>
                        <div className="Mobile-rating">{Fatchdata.rating}</div>
                        <div className="Mobile-deal">{Fatchdata.deal}</div>
                        <div className="Mobile-price">{Fatchdata.price}</div>
                        <div style={{ display: "flex", }}>
                            <div className="Mobile-saving"><span style={{ backgroundColor: "yellow" }}>{Fatchdata.save}</span> with coupon</div>
                            <button className='addcart'>Add to Cart</button>
                        </div>
                        <div className="Mobile-prime">{Fatchdata.deliver}</div>
                    </div>
                </div>
            </div>


        </>
    )
}
