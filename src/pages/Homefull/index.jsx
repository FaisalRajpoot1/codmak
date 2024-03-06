import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Button, Text, GoogleMap, Input, Slider, SelectBox } from "../../components";
import HomeFullRowthu from "../../components/HomeFullRowthu";

const dropDownOptions = [
  { label: "Riyadh", value: "option1" },
  { label: "Jaddah", value: "option2" },
  { label: "Dammam", value: "option3" },
];

export default function HomefullPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>M's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="h-[983px] w-full pt-[162px] bg-white-A700 relative">
          <Img
            src="images/img_background.png"
            alt="background_one"
            className="justify-center h-[821px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
            <Heading size="10xl" as="h1" className="w-[62%] !text-black-900_01 text-center !text-[73.67px]">
              Connecting the Dots in Urban Life
            </Heading>
            <Text size="xl" as="p" className="w-[45%] mt-[18px] text-center !font-normal">
              Bridging the Gap Between Digital and Physical Urban Experiences - your one-stop shop for seamless planning
              and immersive discovery.
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-[45px] gap-[31px]">
              <div className="flex flex-col items-center justify-start w-[20%] mt-5">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-full p-4 bg-gradient2 rounded-[24px]">
                    <div className="flex flex-col items-center justify-start w-full gap-[22px] my-[17px]">
                      <div className="flex flex-col items-start justify-start w-[66%] gap-2">
                        <Heading size="xs" as="h2" className="!font-inter !text-[11.36px]">
                          March 7, 2024{" "}
                        </Heading>
                        <Heading size="md" as="h3" className="!font-inter">
                          Saudi Arabia, riyadh
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-between items-center w-full px-[15px] bg-gray-900 rounded-[18px]">
                          <Img src="images/img_vector_7.svg" alt="vectorseven_one" className="h-[13px]" />
                          <div className="flex flex-col items-start justify-start gap-px">
                            <Heading size="xs" as="h4" className="!font-inter !text-[11.66px]">
                              WE
                            </Heading>
                            <Heading size="4xl" as="h5" className="!font-inter !text-[30.83px]">
                              6
                            </Heading>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[29%] p-[9px] bg-blue_gray-900_02 rounded-[18px]">
                            <div className="flex flex-col items-center justify-start w-[48%] mt-1">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Heading size="xs" as="h6" className="!font-inter !text-[11.66px] z-[1]">
                                  TH
                                </Heading>
                                <Heading size="4xl" as="h3" className="mt-[-5px] !font-inter !text-[30.83px]">
                                  7
                                </Heading>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[10%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Heading size="xs" as="p" className="h-[15px] ml-0.5 !font-inter !text-[11.66px] z-[1]">
                                FR
                              </Heading>
                              <Heading size="4xl" as="h3" className="mt-[-5px] !font-inter !text-[30.83px]">
                                8
                              </Heading>
                            </div>
                          </div>
                          <Img src="images/img_vector_6.svg" alt="vectorsix_one" className="h-[13px] mr-px" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[88%] gap-[27px]">
                        <div className="flex flex-row justify-start items-center w-full gap-[21px]">
                          <div className="flex flex-col items-center justify-start w-[49%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row justify-start items-start">
                                <Heading size="9xl" as="h1" className="!text-[64.14px]">
                                  28
                                </Heading>
                                <Heading size="lg" as="h6" className="mt-[17px] !text-[18.93px]">
                                  °C
                                </Heading>
                              </div>
                              <Heading size="3xl" as="h4" className="mt-[-23px] !text-[24.66px]">
                                Sunny
                              </Heading>
                            </div>
                          </div>
                          <Img src="images/img_sun.png" alt="sun_one" className="w-[85px] object-cover" />
                        </div>
                        <Text size="s" as="p" className="w-[97%] !text-white-A700 !text-[8.19px]">
                          Precipitation: 0% Humidity: 20%
                          <br />
                          Wind: 13 km/h
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[56%]">
                <div className="flex flex-row justify-start w-[44%] gap-3">
                  <Button
                    size="lg"
                    className="text-black-900_01 font-semibold border-black-900_01 border border-solid shadow-sm min-w-[160px] rounded-[23px]"
                  >
                    Login{" "}
                  </Button>
                  <Button
                    color="black_900"
                    size="lg"
                    className="font-semibold border-gray-800_01 border-[1.5px] border-solid min-w-[160px] rounded-[23px]"
                  >
                    Sign up
                  </Button>
                </div>
                <div className="flex flex-row justify-start items-end w-full mt-[75px] gap-[31px]">
                  <div className="h-[287px] w-[31%] relative">
                    <div className="flex flex-col items-center justify-start w-full bottom-0 right-0 left-0 m-auto bg-gray-300 absolute rounded-[22px]">
                      <Img
                        src="images/img_image_13.png"
                        alt="imagethirteen"
                        className="w-full object-cover rounded-[22px]"
                      />
                    </div>
                    <div className="justify-center h-[287px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_image_13_after_edit.png"
                        alt="image13after"
                        className="justify-center h-[287px] w-full left-0 bottom-0 right-0 top-0 m-auto rounded-br-[22px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[19px] m-auto rounded-bl-[22px] rounded-br-[22px] bg-gradient5 absolute">
                        <Heading size="2xl" as="h5" className="w-[87%] mt-1.5 !text-black-900_01 rotate-[360deg]">
                          Virtual Tours & Travels
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-[31%] gap-0.5 p-3.5 bg-gradient3 rounded-[22px]">
                    <Heading as="p" className="mt-1 ml-1.5 !text-black-900_01">
                      Skip Traffic, Save Time:{" "}
                    </Heading>
                    <Heading size="2xl" as="h5" className="w-[98%] mb-[5px] ml-1.5 !text-black-900_01">
                      Get Real-Time Traffic & Route Options
                    </Heading>
                  </div>
                  <div className="h-[264px] w-[31%] bg-gradient4 relative rounded-[22px]">
                    <Img
                      src="images/img_group_3.svg"
                      alt="image"
                      className="justify-center h-[264px] left-0 bottom-0 right-0 top-0 m-auto opacity-0.4 absolute rounded-[22px]"
                    />
                    <div className="flex flex-row justify-end items-center w-[79%] bottom-[13%] right-[7%] m-auto absolute">
                      <Img src="images/img_vector_2.svg" alt="vectortwo_one" className="h-[130px] rounded-md" />
                      <Img src="images/img_icons.svg" alt="icons_one" className="h-[21px] w-[21px] ml-[-9px]" />
                    </div>
                    <Img
                      src="images/img_icons.svg"
                      alt="icons_three"
                      className="h-[21px] w-[21px] left-[10%] top-[37%] m-auto absolute"
                    />
                    <Heading size="lg" as="h6" className="w-[56%] top-[8%] right-0 left-0 m-auto text-center absolute">
                      Find Your Fastest Route
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[77%] mt-7 gap-[5px] p-[7px] bg-blue_gray-900_7f rounded-[22px]">
                  <Button
                    color="white_A700_3d"
                    size="2xl"
                    variant="outline"
                    leftIcon={<Img src="images/img_group_10.svg" alt="Group 10" />}
                    className="gap-2 font-medium min-w-[106px] rounded-[15px]"
                  >
                    Menu
                  </Button>
                  <Button
                    color="blue_gray_900_01"
                    size="2xl"
                    leftIcon={<Img src="images/img_x32.svg" alt="_x32_" />}
                    className="gap-2 font-medium min-w-[131px] rounded-[13px]"
                  >
                    Weather{" "}
                  </Button>
                  <Button
                    color="blue_gray_900_01"
                    size="2xl"
                    leftIcon={<Img src="images/img_frame.svg" alt="Frame" />}
                    className="gap-2 capitalize font-medium min-w-[169px] rounded-[13px]"
                  >
                    Route Planner{" "}
                  </Button>
                  <Button
                    color="blue_gray_900_01"
                    size="2xl"
                    leftIcon={<Img src="images/img_group_10_white_a700.svg" alt="Group 10" />}
                    className="gap-2 capitalize font-medium min-w-[137px] rounded-[13px]"
                  >
                    VR  Travel
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-[20%] mt-5 pt-[19px] px-[19px] bg-gradient1 rounded-[22px]">
                <Heading size="md" as="h6" className="w-[86%] mt-[5px] ml-1 !text-black-900_01 capitalize !font-bold">
                  Selected based on your preferences
                </Heading>
                <div className="flex flex-row justify-start items-center w-full mt-3 gap-2.5 p-[5px] bg-black-900_19 rounded-[13px]">
                  <Button size="xl" className="w-[48px] my-px">
                    <Img src="images/img_frame_23.png" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[54%]">
                    <Text size="xl" as="p">
                      Al Orjouan
                    </Text>
                    <Text size="lg" as="p">
                      2.1 KM Restaurant{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full mt-2 gap-2.5 p-[5px] bg-black-900_19 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start h-[48px] w-[48px] py-[15px] bg-white-A700 rounded-[10px]">
                    <Img
                      src="images/img_image_19.png"
                      alt="imagenineteen"
                      className="w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[58%] gap-0.5">
                    <Text size="xl" as="p">
                      Brew92
                    </Text>
                    <Text size="lg" as="p">
                      2.9 KM Coffee shop{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full mt-2 gap-2.5 p-[5px] bg-black-900_19 rounded-[13px]">
                  <Button size="xl" className="w-[48px] my-px">
                    <Img src="images/img_frame_23_48x48.png" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[56%] gap-px">
                    <Text size="xl" as="p">
                      Albaik{" "}
                    </Text>
                    <Text size="lg" as="p">
                      4.2 KM Restaurant{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full mt-2 gap-2.5 p-[5px] bg-black-900_19 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start h-[48px] w-[48px] bg-white-A700 rounded-[10px]">
                    <Img src="images/img_image_23.png" alt="imagetwentythre" className="w-[44px] object-cover" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[58%] gap-px">
                    <Text size="xl" as="p">
                      Krispy Kreme 
                    </Text>
                    <Text size="lg" as="p">
                      5.6 KM Coffee shop{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-2 pb-4">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-[32px] w-full z-[1] bg-black-900_19 rounded-[13px]" />
                    <div className="flex flex-row justify-start items-center w-[77%] mt-[-26px] ml-[5px] gap-2.5">
                      <Img
                        src="images/img_image_22.png"
                        alt="imagetwentytwo"
                        className="w-[28%] object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] gap-[3px]">
                        <Text size="xl" as="p">
                          Burger King
                        </Text>
                        <Text size="lg" as="p">
                          5.1 KM Restaurant{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end w-full pl-[86px] py-[86px] bg-white-A700">
          <div className="flex flex-col items-center justify-start mt-[53px] ml-[285px] gap-9">
            <Heading size="8xl" as="h2" className="!text-black-900_01 text-center">
              Don&#39;t Let the Weather Catch You Off Guard
            </Heading>
            <Text size="xl" as="p" className="text-center !font-normal">
              Accurate weather forecasts and real-time updates for informed decisions.
            </Text>
            <SelectBox
              indicator={<Img src="images/img_polygon_1.svg" alt="Polygon 1" />}
              name="search"
              placeholder="Search a city"
              options={dropDownOptions}
              className="w-[58%] gap-px font-medium border-black-900_01 border border-solid"
            />
          </div>
          <Heading size="7xl" as="h2" className="mt-[73px] ml-[26px] !text-black-900_01">
            Your Cities
          </Heading>
          <div className="flex flex-col items-start justify-start w-full mt-[35px] gap-[37px] mx-auto max-w-[1339px]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 2 } }}
              renderDotsItem={(props) => {
                return props?.isActive ? <div /> : <div />;
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="h-[675px] mx-2.5 overflow-auto bg-white-A700 relative rounded-[59px]">
                    <Img
                      src="images/img_hdstockimages.png"
                      alt="hdstockimages"
                      className="justify-center h-[675px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[59px]"
                    />
                    <div className="flex flex-row justify-start w-full bottom-0 right-0 m-auto absolute">
                      <div className="flex flex-row justify-between items-center w-[62%]">
                        <div className="h-[235px] w-full relative">
                          <div className="h-[235px] w-[91%] left-0 bottom-0 top-0 m-auto bg-gradient6 absolute" />
                          <div className="flex flex-row justify-end items-end w-[26%] right-0 top-[16%] m-auto absolute">
                            <div className="flex flex-col items-center justify-start w-[24%] pb-0.5">
                              <div className="flex flex-col items-center justify-center w-full gap-[19px] p-2 bg-white-A700_44 rounded-[50%]">
                                <HomeFullRowthu
                                  thu="Thu"
                                  className="flex flex-row justify-center w-[99%] mt-[5px] p-[7px] rounded-[13px]"
                                />
                                <div className="flex flex-col items-center justify-start w-[50%] mb-[5px] gap-[19px]">
                                  <Img src="images/img_sun.png" alt="sun_one" className="w-[32px] object-cover" />
                                  <Text as="p" className="!text-white-A700 text-center !text-[18.65px]">
                                    29
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_sun_cloud.png"
                              alt="suncloud_one"
                              className="w-[16%] mb-[46px] ml-[66px] object-cover"
                            />
                            <Img
                              src="images/img_sun_cloud.png"
                              alt="suncloud_three"
                              className="w-[16%] mb-[46px] ml-[87px] object-cover"
                            />
                          </div>
                          <div className="h-[143px] w-full right-0 top-[16%] m-auto absolute">
                            <div className="flex flex-row justify-start w-[39%] h-max left-[7%] bottom-0 top-0 m-auto absolute">
                              <div className="flex flex-row w-full pl-[141px] gap-[87px]">
                                <div className="flex flex-col items-center justify-start w-[9%] gap-3">
                                  <HomeFullRowthu thu="Sat" className="h-[25px] w-full relative" />
                                  <Img
                                    src="images/img_sun_cloud.png"
                                    alt="suncloud_one"
                                    className="w-full object-cover"
                                  />
                                  <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                    24
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[9%] gap-3">
                                  <HomeFullRowthu className="flex flex-row justify-center w-[84%]" />
                                  <Img
                                    src="images/img_sun_cloud.png"
                                    alt="suncloud_one"
                                    className="w-full object-cover"
                                  />
                                  <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                    24
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[9%] gap-[19px]">
                                  <HomeFullRowthu thu="Sun" className="h-[25px] w-full relative" />
                                  <div className="flex flex-col items-center justify-start w-[57%] gap-[11px]">
                                    <Img src="images/img_sun.png" alt="sun_one" className="w-[32px] object-cover" />
                                    <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                      28
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[10%] gap-[19px]">
                                  <HomeFullRowthu thu="Mon" className="h-[25px] w-full relative" />
                                  <div className="flex flex-col items-center justify-start w-[52%] gap-[11px]">
                                    <Img src="images/img_sun.png" alt="sun_one" className="w-[32px] object-cover" />
                                    <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                      28
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[9%] gap-[19px]">
                                  <HomeFullRowthu thu="Tue" className="h-[25px] w-full relative" />
                                  <div className="flex flex-col items-center justify-start w-[58%] gap-[11px]">
                                    <Img src="images/img_sun.png" alt="sun_one" className="w-[32px] object-cover" />
                                    <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                      28
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[10%] gap-3">
                                  <HomeFullRowthu thu="Wed" className="flex flex-row justify-center w-full" />
                                  <Img
                                    src="images/img_sun_cloud.png"
                                    alt="suncloud_one"
                                    className="w-[85%] object-cover"
                                  />
                                  <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                    28
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full h-full pb-0.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <div className="flex flex-row justify-start w-full">
                                <div className="flex flex-row justify-between items-center w-[60%]">
                                  <div className="h-[141px] w-[7%] relative">
                                    <div className="justify-center h-[141px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-white-A700_44 absolute rounded-[50%]" />
                                    <div className="flex flex-col items-center justify-center w-max h-max gap-[19px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                                      <HomeFullRowthu thu="Thu" className="flex flex-row justify-center w-full" />
                                      <div className="flex flex-col items-center justify-start w-[51%] gap-[11px]">
                                        <Img
                                          src="images/img_sun.png"
                                          alt="sun_three"
                                          className="w-[32px] object-cover"
                                        />
                                        <Text as="p" className="!text-white-A700 !text-[18.65px]">
                                          28
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-between w-auto gap-[114px]">
                                    <Img src="images/img_sun.png" alt="sun_five" className="w-[32px] object-cover" />
                                    <Img src="images/img_sun.png" alt="sun_seven" className="w-[32px] object-cover" />
                                    <Img src="images/img_sun.png" alt="sun_nine" className="w-[32px] object-cover" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_sun_cloud.png" alt="suncloud_five" className="w-[5%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[16%] right-[11%] top-[13%] m-auto absolute">
                      <div className="flex flex-row justify-start items-start">
                        <Heading size="12xl" as="h2">
                          28
                        </Heading>
                        <Heading size="6xl" as="h3" className="mt-[31px] !text-[35.42px]">
                          °C
                        </Heading>
                      </div>
                      <Img
                        src="images/img_sun.png"
                        alt="sun_eleven"
                        className="w-[89px] mt-[-23px] ml-3 object-cover"
                      />
                    </div>
                    <Heading size="5xl" as="h4" className="bottom-[41%] right-[17%] m-auto !text-[32.89px] absolute">
                      Sunny
                    </Heading>
                    <div className="flex flex-col items-start justify-start gap-px left-[11%] top-[19%] m-auto absolute">
                      <Text size="3xl" as="p" className="!text-white-A700 !font-sfprodisplay capitalize !text-[27.1px]">
                        saudi arabia
                      </Text>
                      <Heading size="11xl" as="h5" className="!text-[86.53px]">
                        Riyadh
                      </Heading>
                      <Heading size="3xl" as="h6" className="!text-[24.93px]">
                        Thursday 10:00 AM
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[79%] right-0 top-[13%] m-auto absolute">
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-[43px] !text-white-A700 !font-sfprodisplay capitalize !text-[27.1px]"
                      >
                        saudi arabia
                      </Text>
                      <div className="flex flex-row justify-start items-start gap-px">
                        <Heading size="12xl" as="h1">
                          29
                        </Heading>
                        <Heading size="6xl" as="h2" className="mt-[29px] !text-[35.42px]">
                          °C
                        </Heading>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[90px] bg-blue_gray-50">
          <div className="flex flex-col items-center justify-start w-full mt-3.5 mb-[34px] gap-[78px] max-w-[1260px]">
            <Heading size="8xl" as="h2" className="w-[37%] !text-black-900_01 text-center">
              Skip traffic & <br />
              find the best route
            </Heading>
            <div className="flex flex-row justify-start w-full gap-[31px]">
              <div className="flex flex-col items-center justify-start w-[28%] pt-[23px] px-[23px] bg-white-A700 rounded-[34px]">
                <div className="flex flex-col items-start justify-start w-[97%] mt-1.5">
                  <Heading size="xl" as="h3" className="ml-1 !text-black-900_01">
                    Route Planner
                  </Heading>
                  <div className="flex flex-row justify-start items-center w-[99%] mt-[13px] ml-1 gap-[11px]">
                    <Img src="images/img_group_18.svg" alt="image_one" className="h-[66px]" />
                    <div className="flex flex-col items-center justify-start w-[90%] gap-1.5">
                      <div className="flex flex-row justify-start w-full gap-1.5">
                        <Input
                          name="search"
                          placeholder="Choose starting point"
                          value={searchBarValue1}
                          onChange={(e) => setSearchBarValue1(e)}
                          suffix={
                            searchBarValue1?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue1("")} /> : null
                          }
                          className="w-[82%]"
                        />
                        <Button
                          color="gray_200"
                          size="md"
                          className="w-[40px] border-gray-200 border border-solid !rounded-[11px]"
                        >
                          <Img src="images/img_group_15.svg" />
                        </Button>
                      </div>
                      <Input name="choose" placeholder="Choose destination" className="w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full mt-6">
                    <Text size="lg" as="p" className="!text-gray-500_03">
                      Optimize for
                    </Text>
                    <div className="flex flex-row justify-between w-[93%] mt-[15px]">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img src="images/img_layer_1.svg" alt="layerone_one" className="h-[14px] w-[14px]" />
                        <Text size="md" as="p">
                          Shortest time{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img src="images/img_layer_1.svg" alt="layerone_three" className="h-[14px] w-[14px]" />
                        <Text size="md" as="p">
                          Shortest distance{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="h-px w-[99%] mt-6 bg-black-900_01" />
                    <div className="flex flex-col items-start justify-start w-[99%] mt-[18px] gap-[5px]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-center w-[33%]">
                          <div className="flex flex-row justify-start items-center w-full gap-[9px]">
                            <Img
                              src="images/img_icons_black_900_01.svg"
                              alt="icons_five"
                              className="h-[28px] w-[28px] mb-px"
                            />
                            <div className="flex flex-col items-start justify-start w-[60%]">
                              <Heading as="h4" className="!text-black-900_01">
                                Via Train
                              </Heading>
                              <Text size="xs" as="p" className="!text-green-A400 !text-[5.15px] italic">
                                Recommend
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Heading as="h5" className="!text-black-900_01 text-right">
                          25 min
                        </Heading>
                      </div>
                      <Text size="lg" as="p" className="!font-normal">
                        Fastest route, avoids traffic
                      </Text>
                    </div>
                    <div className="h-px w-[99%] mt-2 bg-gray-400" />
                    <div className="flex flex-row justify-center w-full mt-[11px]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-start gap-[13px]">
                          <Img src="images/img_frame_black_900_01.svg" alt="image_two" className="h-[28px] w-[28px]" />
                          <Heading as="h6" className="mt-0.5 !text-black-900_01">
                            Via Car
                          </Heading>
                        </div>
                        <Heading as="p" className="!text-black-900_01 text-right">
                          45 min
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[99%] mt-4 gap-[11px]">
                      <div className="h-px w-full bg-gray-400" />
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center gap-[17px]">
                            <Img src="images/img_vector.svg" alt="vector_one" className="h-[20px] w-[20px] mt-px" />
                            <Heading as="p" className="!text-black-900_01">
                              Via Bus
                            </Heading>
                          </div>
                          <Heading as="p" className="!text-black-900_01 text-right">
                            1 hr 5 min
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="black_900_01"
                      size="sm"
                      rightIcon={<Img src="images/img_frame_white_a700.svg" alt="Frame" />}
                      className="mt-6 gap-2.5 font-medium border-gray-500_03 border border-solid min-w-[158px] rounded-[7px]"
                    >
                      Begin your road
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[99%] mt-[30px] ml-1 gap-[18px]">
                    <div className="h-px w-full ml-px bg-black-900_01" />
                    <Heading size="xl" as="h5" className="!text-black-900_01">
                      Nearby your Route
                    </Heading>
                    <div className="flex flex-col w-full gap-px">
                      <div className="flex flex-row justify-start items-center w-[97%] ml-2.5 gap-2.5 p-[5px] bg-black-900_0c rounded-[13px]">
                        <Button size="xl" className="w-[48px] my-px">
                          <Img src="images/img_frame_23.png" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[33%]">
                          <Text size="xl" as="p">
                            Al Orjouan
                          </Text>
                          <Text size="lg" as="p">
                            Restaurant{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-start w-[1%] mr-[279px]">
                        <div className="h-[101px] w-[2px] bg-gray-300_01" />
                        <div className="h-[33px] w-[2px] ml-[-2px] bg-gray-700" />
                      </div>
                      <div className="flex flex-row justify-start items-center w-[97%] ml-2.5 gap-2.5 p-[5px] bg-black-900_0c rounded-[13px]">
                        <div className="flex flex-col items-center justify-start h-[48px] w-[48px] py-[15px] bg-white-A700 rounded-[10px]">
                          <Img
                            src="images/img_image_19.png"
                            alt="imagenineteen"
                            className="w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[28%] gap-0.5">
                          <Text size="xl" as="p">
                            Brew92
                          </Text>
                          <Text size="lg" as="p">
                            Coffee shop{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[97%] ml-2.5 gap-2.5 p-[5px] bg-black-900_0c rounded-[13px]">
                        <Button size="xl" className="w-[48px] my-px">
                          <Img src="images/img_frame_23_48x48.png" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[26%] gap-px">
                          <Text size="xl" as="p">
                            Albaik{" "}
                          </Text>
                          <Text size="lg" as="p">
                            Restaurant{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[97%] ml-2.5">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="h-[26px] w-full bg-black-900_0c rounded-[13px]" />
                            <div className="flex flex-row justify-center mt-[-20px] ml-[5px] bg-white-A700 rounded-[10px]">
                              <Img
                                src="images/img_image_23.png"
                                alt="imagetwentythre"
                                className="w-[92%] mt-px object-cover"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mt-[-18px] ml-[63px] pb-[25px] gap-[9px]">
                            <Text size="xl" as="p">
                              Krispy Kreme 
                            </Text>
                            <Text size="lg" as="p">
                              5.6 KM Coffee shop{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <GoogleMap
                showMarker={false}
                className="h-[816px] w-[71%] border-black-900_01 border border-solid bg-gray-800_02 shadow-xs rounded-[34px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[810px] w-full bg-black-900_01 relative">
          <Img
            src="images/img_image_13_810x1440.png"
            alt="imagethirteen"
            className="justify-center h-[810px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
            <div className="flex flex-col items-start justify-end w-[62%] pl-[79px] pr-14 gap-[33px] py-[79px] bg-gradient">
              <Text size="xl" as="p" className="w-[70%] mt-[317px] !text-white-A700 !font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </Text>
              <Button
                color="white_A700_2d"
                size="lg"
                className="mb-[221px] font-semibold border-white-A700 border border-solid min-w-[236px] rounded-[23px]"
              >
                Join the waiting list
              </Button>
            </div>
            <Img
              src="images/img_image_13_after_edit_810x910.png"
              alt="image13after"
              className="w-[64%] ml-[-360px] object-cover"
            />
          </div>
          <Heading size="9xl" as="h2" className="w-[50%] left-[5%] top-[26%] m-auto absolute">
            Explore the World From Your Home
          </Heading>
        </div>
      </div>
    </>
  );
}
