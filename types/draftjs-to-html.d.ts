declare module "draftjs-to-html" {
  import { RawDraftContentState } from "draft-js";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const draftToHtml: (content: RawDraftContentState, options?: any) => string;
  export default draftToHtml;
}