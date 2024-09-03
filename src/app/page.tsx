import {
  About,
  CallBack,
  Footer,
  Header,
  MainInfo,
  MyStack,
  Projects,
} from "@/shared/components";

function Home() {
  return (
    <>
      <Header />
      <MainInfo />
      <About />
      <MyStack />
      <Projects />
      <CallBack />
      <Footer />
    </>
  );
}

export default Home;
