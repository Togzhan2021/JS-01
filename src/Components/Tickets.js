import React, { Component } from "react";
import data from "../data.json";
import { Tab } from "react-bootstrap";
import "../assets/style.css";
import S7Logo from "../assets/S7Logo.svg";

export default class Tickets extends Component {
  render() {
    return (
      <>
        <Tab.Content className="mt-3">
          {data.map((postData) => {
            return (
              <Tab.Pane className="tab-pane" eventKey="first">
                <div className="price d-flex align-items-center">
                  <h4>{postData.price} Р</h4>

                  <img src={S7Logo} alt="logo-airline" class="logoA" />
                </div>

                <table class="table-ticket">
                  <tbody>
                    <tr class="table-text">
                      <td>
                        {postData.segments[0].origin} -{" "}
                        {postData.segments[0].destination}
                      </td>
                      <td>в пути</td>
                      <td>{postData.segments[0].stops.length} пересадки</td>
                    </tr>
                    <tr class="table-info">
                      <td>{postData.segments[0].date}</td>
                      <td>{postData.segments[0].duration}</td>
                      <td>
                        {postData.segments[0].stops[0]},{" "}
                        {postData.segments[0].stops[1]}
                      </td>
                    </tr>
                    <tr>
                      <br />
                    </tr>
                    <tr class="table-text">
                      <td>
                        {postData.segments[1].origin} -{" "}
                        {postData.segments[1].destination}
                      </td>
                      <td>в пути</td>
                      <td>{postData.segments[1].stops.length} пересадки</td>
                    </tr>
                    <tr class="table-info">
                      <td>{postData.segments[1].date}</td>
                      <td>{postData.segments[1].duration}</td>
                      <td>
                        {postData.segments[1].stops[0]},{" "}
                        {postData.segments[1].stops[1]}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div></div>
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </>
    );
  }
}
