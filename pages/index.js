import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Layout } from '../components/layout';
import api from '../auth/axios';
import { MDBContainer } from "mdbreact";
import { PropertyVip } from '../components/propertyVip';
import { Carousel } from '../components/carousel';

export default function Home({ propertiesVip }) {
  return (
    <Layout>
      <MDBContainer>
        <PropertyVip properties={propertiesVip} />
      </MDBContainer>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip")

  return {
    props: {
      propertiesVip
    }
  }
}