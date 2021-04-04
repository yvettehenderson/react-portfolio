import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import cal from "../assets/cal.png";
import note from '../assets/note.png';
import music from '../assets/music.png';

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
