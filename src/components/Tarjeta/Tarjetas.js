import React from 'react'
import './styleTPD.css'
import Person01 from "../../assets/about/agus.jpg";

export const Tarjetas = () => {

    let title = document.querySelector(".title");
    let nav = document.querySelector(".nav");
    let boton = document.querySelector(".boton");

    const handleClik = () => {
        title.classList.toggle("active")
        nav.classList.toggle("active")
        boton.classList.toggle("active")

    }

    return (
        <div id="Tarjeta" className="tarjeta">
            <div className="contact-area">
                <div className="contact">
                    <main>
                        <section>
                            <div className="content">
                                <img
                                    src={Person01}
                                    alt="Profile Image"
                                />

                                <aside>
                                    <h1 className="text-bold">AGUSTÍN SOBRERO PRATTO</h1>
                                    <p>ABOGADO - M.P.: Tº 139  Fº 0972</p>
                                </aside>

                                <button onClick={handleClik} className="boton">
                                    <span>Contactame</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                    >
                                        <g className="nc-icon-wrapper" fill="#444444">
                                            <path
                                                d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"
                                            ></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                            <div className="title">
                                <p>Contactame</p>
                            </div>
                        </section>
                    </main>

                    <nav className="nav">
                        <a
                            href="https://web.whatsapp.com/send?phone=+54 9 3513 09-5631"
                            target="blank"
                            className="phone"
                        >
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                    ></path>
                                </svg>
                            </div>

                            <div className="content">
                                <h1>Whatsapp</h1>
                                <span>0351-153095631</span>
                            </div>

                            <svg
                                className="arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                            >
                                <g className="nc-icon-wrapper" fill="#444444">
                                    <path
                                        d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"
                                    ></path>
                                </g>
                            </svg>
                        </a>

                        <a href="mailto:dr.agustinsobreropratto@gmail.com" className="gmail">
                            <div className="icon">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </div>

                            <div className="content">
                                <h1>Email</h1>
                                <span>dr.agustinsobreropratto@gmail.com</span>
                            </div>

                            <svg
                                className="arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                            >
                                <g className="nc-icon-wrapper" fill="#444444">
                                    <path
                                        d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"
                                    ></path>
                                </g>
                            </svg>
                        </a>

                        <a
                            href="https://www.facebook.com/SobreroPrattoAsoc"
                            target="blank"
                            className="facebook"
                        >
                            <div className="icon">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="1.414"
                                >
                                    <path
                                        d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </div>

                            <div className="content">
                                <h1>Facebook</h1>
                                <span>Sobrero Pratto & Asoc.</span>
                            </div>

                            <svg
                                className="arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                            >
                                <g className="nc-icon-wrapper" fill="#444444">
                                    <path
                                        d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"
                                    ></path>
                                </g>
                            </svg>
                        </a>


                    </nav>
                </div>
            </div>
        </div>


    )


}
