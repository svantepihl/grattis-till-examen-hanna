
import tw from "twin.macro"
import React from "react"

import airbnb1 from "../images/airbnb1.webp"
import airbnb2 from "../images/airbnb2.webp"
import airbnb3 from "../images/airbnb3.webp"


import SEO from "../components/seo"
import Layout from "../components/layout"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-auto
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl lg:w-1/2 w-full py-12
`

const Heading = tw.h1`
  text-2xl text-black mt-4
`

const Text = tw.p`
  text-xl text-black
`



export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="God jul!" />
        <Main>
          <Heading>JÄTTESTORT GRATTIS TILL EXAMEN HANNA<span role="img">👩‍🎓</span> <br/></Heading>
          <Text className="pt-12 text-left">
          <br/>Som examenpresent tänkte jag att vi skulle åka på en minisemester någon helg till en mysig eller cool stuga! Exakt vilken och när får vi bestämma tillsammans🏠
          <br/><br/>Här är några förslag: <br/>
          </Text>
          <a target="blank" href='https://www.airbnb.se/rooms/37326251?check_in=2021-02-21&check_out=2021-02-26&s=67&unique_share_id=1259a437-76a3-4c47-8083-bfd2ee2bac68'><img src={airbnb1} alt="Alternativ 1" /></a>
          <a target="blank" href='https://www.airbnb.se/rooms/18391876?check_in=2021-02-22&check_out=2021-02-25&s=67&unique_share_id=40449d43-2cdb-4227-8290-6e3140e11892'><img src={airbnb2} alt="Alternativ 2" /></a>
          <a target="blank" href='https://www.airbnb.se/rooms/25530300?s=67&unique_share_id=a3c44a3c-6518-4f77-a28e-b98d4b41f8ee'><img src={airbnb3} alt="Alternativ 3" /></a>
        </Main>
      </Wrapper>
    </Layout>
  )
}
