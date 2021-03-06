import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBRow,
} from "mdbreact";
import { priceFormatted } from "./helpers";

export const PropertyVip = ({ properties }) => (
    <>
        <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Biens sponsorisés</h2>
        <MDBRow>
            {
                properties && properties.map(property => (
                    <MDBCol md="4" lg="4" key={property.id}>
                        <MDBCard>
                            <img className="card-img-top globalImg" src={property.pictures[0]} />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    {property.title}
                                </MDBCardTitle>
                                <MDBCardText>
                                    <strong>{priceFormatted(property.price)}</strong>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))
            }
        </MDBRow>
    </>
)