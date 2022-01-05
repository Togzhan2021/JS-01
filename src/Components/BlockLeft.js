import React, { Component } from "react";
import data from "../data.json";
import { Form, Tab } from "react-bootstrap";
import "../assets/style.css";
import S7Logo from "../assets/S7Logo.svg";
import { Label } from "reactstrap";

export default class BlockLeft extends Component {
  render() {
    return (
      <>
        <div class="left-block">
          <h5>Количество Пересадок</h5>
          <Form className="form-checkbox">
            <fieldset>
              <input type="checkbox" name="all" />
              <Label>Все</Label>
            </fieldset>
            <fieldset>
              <input type="checkbox" name="none" />
              <Label>Без пересадок</Label>
            </fieldset>
            <fieldset>
              <input type="checkbox" name="1Peresadka" />
              <Label>1 пересадка</Label>
            </fieldset>
            <fieldset>
              <input type="checkbox" name="2Peresadki" />
              <Label>2 пересадки</Label>
            </fieldset>
            <fieldset>
              <input type="checkbox" name="3Peresadki" />
              <Label>3 пересадки</Label>
            </fieldset>
          </Form>
        </div>
      </>
    );
  }
}
