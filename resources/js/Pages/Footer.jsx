import React from "react";

const Footer = () => {
    const date = new Date();
    return (
        <footer id="footer">
            <div className="bg-primary text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">Contact Us</h4>
                            <i className="fas fa-road"></i> Molyko Buea <br />
                            <i className="fas fa-envelope"></i>{" "}
                            andy@interview.com <br />
                            <i className="fab fa-whatsapp"></i> +237 675874066{" "}
                            <br />
                            <i className="fab fa-facebook"></i> Andy Tech
                        </div>
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">About Us</h4>
                            We are a software development team based in Molyko
                            Buea. We offer: mobile apps, desktop apps, web
                            applications, websites, graphics design and much
                            more for you guys at very affordable prices.
                        </div>
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">Subscribe</h4>
                            We aim at helping young youths in ICT by training
                            and inspiring them on the importance of technology
                            in our upcoming society. Subscribe to get more info.{" "}
                            <br />
                            <span className="h3">
                                <i className="mx-2 fab fa-whatsapp"></i>
                                <i className="mx-2 fab fa-facebook"></i>
                                <i className="mx-2 fab fa-instagram"></i>
                                <i className="mx-2 fab fa-telegram"></i>
                                <i className="mx-2 fab fa-twitter"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center bg-ndetek text-white my-0 py-3">
                Andy Tech &copy; copyright {date.getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
