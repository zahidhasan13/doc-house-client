import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import teeth from "../assets/teeth.png";
import "react-tabs/style/react-tabs.css";

const ServiceTabs = () => {
  return (
    <div className="my-10">
      <Tabs>
        <TabList>
          <Tab>Cavity Protection</Tab>
          <Tab>Cosmetic Dentisty</Tab>
          <Tab>Oral Surgery</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5">
            <img src={teeth} alt="" className="mt-10" />
            <h3 className="text-3xl font-bold">Electro Gastrology Therapy</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p>
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className=" btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
              Appointment
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-5">
            <img src={teeth} alt="" className="mt-10" />
            <h3 className="text-3xl font-bold">Electro Gastrology Therapy</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p>
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className=" btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
              Appointment
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-5">
            <img src={teeth} alt="" className="mt-10" />
            <h3 className="text-3xl font-bold">Oral Surgery</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p>
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className=" btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
              Appointment
            </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
