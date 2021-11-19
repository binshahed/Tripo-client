import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import guide from "../../image/team/1.jpg";
import guide1 from "../../image/team/2.jpg";
import guide2 from "../../image/team/3.jpg";

const TourGuides = () => {
  return (
    <div className="container mb-5">
      <h1 className="mb-5 text-center">
        Our <span className="text-warning">Tour Guides</span>
      </h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={guide} />
          <Card.Body>
            <Card.Title>Roberto Strippoli</Card.Title>
            <Card.Text>
              A native of Puglia, Strippoli is a font of Italian history. In the
              off-season, he focuses on his culinary and sommelier studies. He
              is a multisport guide for Backroads."A favorite spot is the little
              14th-century Cetrella church going up from Anacapri to Monte
              Solaro. It’s a beautiful piece of architecture with balconies that
              face the Gulf of Naples, and guests just love it. The view, the
              nature, the colors—that’s the essence of the Amalfi coast. It’s a
              great example of integration of architecture and landscape. And it
              demonstrates how clever those Christian mystics and hermits really
              were."
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={guide1} />
          <Card.Body>
            <Card.Title>Kennedy Omwenga </Card.Title>
            <Card.Text>
              A safari director for Micato Safaris, Omwenga grew up tending
              goats in the western highlands of Kenya, where he returns at times
              to serve as a Kisii tribal chief."My hope is for guests to connect
              with the local people so that they can understand the diversity of
              our cultures and appreciate how different our lives are compared
              to most Americans’ lives. At the same time, I show that we’re more
              alike than they may think. We all hope for a better future for our
              children, for a cleaner planet, and for peace. Also, many
              travelers are surprised to learn that some Kisii people have
              Facebook pages, even though they still live in the traditional way
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={guide2} />
          <Card.Body>
            <Card.Title>Nic Polenakis</Card.Title>
            <Card.Text>
              Polenakis, an independent guide for Africa Adventure Company, was
              born in Zimbabwe and is specially trained to lead walking
              safaris."I often sit for hours in anticipation of a kill and will
              analyze and investigate every fresh leopard track, rhino dung
              midden, steaming elephant dropping, buffalo wallow, lion roar, or
              any clue to the whereabouts of the animals. However, I just as
              passionately explain African culture and history, seek birds,
              insects, and reptiles; identify trees, grasses, and shrubs; and
              discuss everything else to do with conservation and ecotourism. To
              me it’s all about revealing the big picture and not necessarily
              only the Big Five."
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TourGuides;
