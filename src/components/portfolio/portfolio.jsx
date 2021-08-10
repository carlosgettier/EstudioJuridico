import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
import { Link } from "react-scroll";
//Scss
import "./portfolio.scss";
//Assets
import Preview1 from "../../assets/portfolio/project01/images.jpg";
import Preview2 from "../../assets/portfolio/project02/descarga.jpg";
import Preview3 from "../../assets/portfolio/project03/images.jpg";
import foto from '../../assets/portfolio/foto.png'
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import { Modal } from "../Modal/Modal";
import { Contratos } from "../Contratos/Contratos";
import { Ciudadania } from "../Ciudadania/Ciudadania";
import { Gestion } from "../Gestion/Gestion";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "DERECHO LABORAL",
          tag: "branding",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Smartwatch",
          tag: "web",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Speakerphone",
          tag: "illustrations",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING

    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />

      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER


    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="SERVICIOS" />
          <div className="contenedorBarra">
            <img src={foto} className="foto" />
            <div className="barra">

              <Link activeClass="active-link" to="Modal" spy={true} smooth={true} offset={-70} duration={500}>
                DERECHO LABORAL
              </Link>
              <Link activeClass="active-link" to="Contratos" spy={true} smooth={true} offset={-70} duration={500}>
                CONTRATOS
              </Link>
              <Link activeClass="active-link" to="Ciudadania" spy={true} smooth={true} offset={-70} duration={500}>
                CIUDADANIA ITALIANA
              </Link>
              <Link activeClass="active-link" to="Gestion" spy={true} smooth={true} offset={-70} duration={500}>
                GESTION JUDICIAL - ADMINISTRATIVA
              </Link>
            </div>
          </div>
          <Modal />
          <Row className="flex-center padding40">
            <Button label="CONTACTANOS" target={"contact"} />
          </Row>
          <Contratos />
          {/* <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry> */}
          <Row className="flex-center padding40">
            <Button label="CONTACTANOS" target={"contact"} />
          </Row>
          <Ciudadania />
          <Row className="flex-center padding40">
            <Button label="CONTACTANOS" target={"contact"} />
          </Row>
          <Gestion />
          <Row className="flex-center padding40">
            <Button label="CONTACTANOS" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
