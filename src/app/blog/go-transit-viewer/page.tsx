import { BlogPostShell } from "@/components/BlogPostShell";
import {CodeBlock} from "@/components/CodeBlock";
import { useLocation } from "react-router-dom";
import metadata from "./meta.json";

export default function BlogPost() {
  return (
    <BlogPostShell
      metadata={metadata}
      imageUrl={"/images/projects/gotransit_highres.png"}
    >
    <h2>About the GO Transit Viewer</h2>
    <p>
      The GO Transit Viewer is an interactive visual tool I developed to map all bus and train routes operated by GO Transit across Southern Ontario. My goal was to create an intuitive and user-friendly way for people to explore the region's extensive transit network.
    </p>

    <h2>How It Was Built</h2>
    <p>
      Using JavaScript and HTML, I built the viewer by leveraging the same public data sources utilized by companies like Google and Apple. This allowed me to create a geographically accurate representation of GO Transit's network, ensuring both precision and reliability in how routes and connections are displayed.
    </p>

    <p>For the Great Lakes outline, I parsed real world Geo-spatial data; gathering the outlined points into a Geo-JSON. Then we could use those points to triangulate a plane, which would then become the Great Lakes.</p>

    <h2>Future Goals</h2>
    <p>
      I'm very proud of how this prototype turned out and hope to revisit this project again in the future to utilize what I've learned since making this first version. I've come a long way since starting, and there are several areas I'd like to improve upon.
    </p>
    <p>
      Ensuring the viewer is fully responsive and intuitive across all screen sizes is a top priority. Although, all map applications on Mobile Devices use an App, and not the browser -- and I think this experience taught me why.
    </p>
    <p>
      Second, I aim to fix inconsistencies with zooming and enhance the overall navigation experience. This includes better iconography for stations and stops to make the map more visually appealing and easier to understand from more zoomed in views. This also includes potentially mapping out greens spaces and (smaller) bodies of water to provide better context for users.
    </p>
    <p>
      Third, I would like to add more detailed information about each route and stop, providing users with a richer and more informative experience. Additionally, I want to expand the scope of the project to include transit systems beyond GO Transit, such as the TTC, MiWay, and others, to create a comprehensive regional transit map.
    </p>
    <p>
      Finally, I want to focus on improving performance, especially when rendering large numbers of routes. Optimizing the viewer for speed and efficiency will ensure it remains a reliable tool for users.
    </p>

    </BlogPostShell>
  );
}
