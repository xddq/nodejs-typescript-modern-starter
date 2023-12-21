/**
 * This is just some dummy code taken from the current typescript playground and
 * then adapted a little so that github displays this repo as a typescript repo.
 * Based on the little amount of typescript compared to js it would otherwise be
 * displayed as js repo, which is quite ironic.
 * Typescript playground: https://www.typescriptlang.org/play
 * TL;DR: Delete this dummy file after cloning the repo.
 */

type ValidateRow<T> = {
  [K in keyof T]: K extends `pdf${string}`
    ? string
    : K extends `thumbnail${string}`
      ? readonly [string, string]
      :
          | {
              readonly text: string;
              readonly type: "text";
            }
          | {
              text: string;
              type: "image";
              thumbnail: string;
            };
};

function createRow<T extends ValidateRow<T>>(row: T): T {
  return row;
}

export const doStuff = () => {
  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });

  createRow({
    givenName: {
      text: "Foo",
      type: "text",
    },
    familyName: {
      text: "Bar",
      type: "text",
    },
    picture: {
      text: "abc.png",
      type: "image",
      thumbnail: "https://example.com/thumbnail/sample.png",
    },
    pdf62882329b9baf800217efe7c: "https://example.com/pdf/genarated_pdf.pdf",
    thumbnail62882329b9baf800217efe7c: [
      "https://example.com/thumbnail/head.png",
      "https://example.com/thumbnail/rail.png",
    ],
  });
};

// No error!
