import React from "react";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import FooterDeskTop from "./FooterDeskTop";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";

function Footer() {
    return (
        <>
            <Desktop>
                <FooterDeskTop />
            </Desktop>
            <Tablet>
                <FooterTablet />
            </Tablet>
            <Mobile>
                <FooterMobile />
            </Mobile>
        </>
    );
}

export default Footer;
