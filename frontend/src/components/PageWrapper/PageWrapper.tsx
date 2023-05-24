import { ReactElement } from "react";
import Navigation from "../Navigation/Navigation";
// import Metadata, {MetadataProps} from "../Metadata";
// import Navigation from "../Navigation";

interface PageProps {
  children: ReactElement;
}

export default function PageWrapper({ children }: PageProps) {
  return (
    <>
      {/* <Metadata {...metadata}/>
            <Navigation /> */}
      <Navigation />
      <div className="mx-auto px-4 py-8 md:py-12 xl:py-16 md:px-8 md:max-w-screen-md">
        <main>{children}</main>
      </div>
    </>
  );
}
