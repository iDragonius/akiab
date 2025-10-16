export type ContentType = {
  type: "paragraph";
  children: {
    text: string;
    type: "text";
  }[];
};

export type BlocksContent = ContentType[];

export type Seo = {
  metaTitle: string;
  metaDescription: string | null;
  shareImage: {
    url: string;
  } | null;
};
