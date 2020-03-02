import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import LabelAndInput from "../components/Field/LabelAndInput";

export default class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="3 3 3 3">
              <div>
                <img
                  src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                ></img>
              </div>
            </Grid>
            <Grid cols="6 6 6 6">
              <label>Ticket to ride - Europe</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tempor massa ligula, sit amet iaculis urna blandit
                commodo. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nunc sapien eros,
                dignissim ac dui ut, tincidunt finibus mi. Quisque lacinia nisi
                et ante tristique, sed dictum justo ultricies. Nulla rutrum
                pretium faucibus. Etiam finibus congue congue. Fusce maximus
                odio leo, pretium placerat risus porta ac. Mauris a dolor
                ultrices, bibendum lacus vitae, porta lacus. Aenean mi libero,
                feugiat ac semper a, porttitor eget diam. Sed enim tortor,
                tincidunt eu vulputate eu, vehicula vitae quam. Donec cursus
                sodales velit, nec vulputate turpis pharetra eu. Duis cursus
                feugiat felis, sit amet posuere tellus molestie sed.
              </p>
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <Row>
                    <Grid
                      cols="12 12 12 12"
                      class="d-flex justify-content-center"
                    >
                      <h4>R$ 700,00</h4>
                    </Grid>
                  </Row>
                </div>
                <div className="card-header">
                  <div className="form-group">
                    <label>Frete e prazo</label>
                    <Row>
                      <Grid cols="9 9 9 9">
                        <input
                          className="form-control"
                          placeholder="00000-000"
                          type="text"
                        ></input>
                      </Grid>
                      <Grid cols="3 3 3 3">
                        <Button type="button" variant="outline-primary">
                          OK
                        </Button>
                      </Grid>
                    </Row>
                  </div>
                </div>
                <div className="card-header">
                  <Row>
                    <Grid
                      cols="12 12 12 12"
                      class="d-flex justify-content-center"
                    >
                      <Button type="button" variant="outline-primary" onClick={e => (window.location = "/cart")}>
                        Adicionar ao carrinho
                      </Button>
                    </Grid>
                  </Row>
                </div>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
