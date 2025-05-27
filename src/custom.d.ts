import { HankoAuthElementProps, HankoProfileElementProps, HankoEventsElementProps } from "@teamhanko/hanko-elements";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
        "hanko-auth": HankoAuthElementProps;
        "hanko-login": HankoAuthElementProps;
        "hanko-registration": HankoAuthElementProps;
        "hanko-profile": HankoProfileElementProps;
        "hanko-events": HankoEventsElementProps;
    }
  }
}