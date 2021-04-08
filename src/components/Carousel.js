import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import cal from "../assets/cal.png";
import note from '../assets/note.png';
import music from '../assets/music.png';
import password from "../assets/password.png";
import fitness from "../assets/fitness.png";

import Card from '../components/Card';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Note Taker",
          subTitle: "",
          imgSrc: note,
          link: "https://afternoon-meadow-88480.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Music Spider",
          subTitle: "",
          imgSrc: music,
          link: "https://inesr19.github.io/Project-1/",
          selected: false,
        },
        {
          id: 2,
          title: "Calendar",
          subTitle: "",
          imgSrc: cal,
          link: "https://yvettehenderson.github.io/calendar/",
          selected: false,
        },
        {
          id: 3,
          title: "Password Generator",
          subTitle: "",
          imgSrc: password ,
          link: "https://yvettehenderson.github.io/password-generator/",
          selected: false,
        },
        {
          id: 4,
          title: "Fitness Tracker",
          subTitle: "",
          imgSrc: fitness,
          link: "https://ancient-springs-30410.herokuapp.com/?id=60550b42cef5ff0015b9ff7a",
          selected: false,
        },
        
      ],
    };
  }
  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render() {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;
