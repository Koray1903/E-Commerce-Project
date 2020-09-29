import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/ProductDetailTabs.scss";

const ProductDetailTabs = () => {

    const [key, setKey] = useState("Description");

    return (
        <div>
            <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
                <br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                <br/>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                <br/>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
                <br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                <br/>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                <br/>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </p>
        </div>
    );
};

export default ProductDetailTabs;