import React from 'react';

const Footer = () => {
    return (
        <div style={{ background: '#FBD062' }}>
            <div className="container pb-3">
                <div className="row pt-5 ">
                    <div className="col-md-6">
                        <h2>
                            Let us handle your
                            <br />
                            project, Professionally.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Magnam voluptatem enim ea aliquid sequi rerum!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Your email address"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Your name / company's name"
                                />
                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    border: 'none',
                                    padding: '7px 25px',
                                    fontWeight: '700',
                                    borderRadius: '5px',
                                }}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <p className=" pt-5 text-center">
                    Copyright, All right reserve at Alamins mind
                </p>
            </div>
        </div>
    );
};

export default Footer;
