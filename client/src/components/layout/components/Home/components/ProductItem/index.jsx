import classnames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import api from "../../../../../../assets/data/api";

const cb = classnames.bind(styles);

function ProductItem({ image, title, sale, oldPrice, place, discount, link }) {
  return (
    <Card className={cb("product", "no-border")}>
      <Card.Img className={cb("product-img")} variant="top" src={image} />
      <Card.Body className={cb("product-wrapper")}>
        <Card.Title className={cb("product-title")}>{title}</Card.Title>
      </Card.Body>
      <ListGroup className={cb("product-group", "list-group-flush")}>
        <ListGroup.Item className={cb("product-sale", "no-border")}>{sale}</ListGroup.Item>
        <ListGroup.Item
          className={cb(
            "product-discount",
            "d-lg-flex",
            "align-items-lg-center",
            "no-border"
          )}
        >
          <del className={cb("product-discount-delete")}>{oldPrice}</del>
          <p className={cb("product-discount-percent")}>{discount}</p>
        </ListGroup.Item>
        <ListGroup.Item className={cb("product-discount-place")}>
          {place}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className={cb("product-discount-link")} href={link}>
          Mua Ngay
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
