import React from "react";
import './tabSwitch.css';

function TabSwitch(){
    return(
        <div className="">
            <div className="container tabSwitch">
                <div className="tab" tabindex="0">
                    <div className="tabImage">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="" />
                    </div>
                    <span className="tabText">Delivery</span>
                </div>
                <div className="tab" tabindex="0">
                    <div className="tabImage">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="" />
                    </div>
                    <span className="tabText">Delivery</span>
                </div>
                <div className="tab" tabindex="0">
                    <div className="tabImage">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="" />
                    </div>
                    <span className="tabText">Delivery</span>
                </div>
            </div>
            <div className="container-fluid tabBorder"></div>
        </div>
    );
}
export default TabSwitch;