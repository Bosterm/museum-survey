<template>
  <v-container class="fill-height">
    <v-row no-gutters class="align-center">
      <v-col>
        <v-card align-self="center" class="pa-2 mx-auto" max-width="700">
          <v-card-title class="justify-center"
            ><h5 class="text-h5 text-center">About</h5></v-card-title
          >
          <v-card-text>
            <p><a href="https://benostermeier.com/">Ben Ostermeier</a> created this web application for IS 426: Museum Informatics in fall 2021. It is meant to be part of a theoretical exhibit on the notorious &ldquo;blue and black&rdquo; or &ldquo;white and gold&rdquo; dress.</p>
            <h6 class="text-h6 text-center">Background</h6>
            <p>
              One of the defining features of the early 21<sup>st</sup> century
              has been the splitting of groups into smaller communities due to
              the rising influence of digital tools, especially social media.
              This division often results in groups that have sharply different
              world views than others. This proposed exhibit aims to explore
              this digital-driven division through a contentious, but largely
              non-consequential issue: the dress Internet phenomenon.
            </p>
            
            <p>
              A low resolution, poorly lit photograph of a striped dress went
              viral on social media in late February 2015. People vehemently
              disagreed on whether the dress was black and blue or white and
              gold, resulting in debates on how one image could have such widely
              different interpretations. While the media was able to eventually
              confirm that the dress itself was blue and black, after seven
              years there is still no scientific consensus about why the
              photograph elicits such different perceptions.
            </p>
            <p>
              While the proposed exhibit may explore several of the neuroscience
              and vision studies that propose explanations as to why the dress
              image is contentious, this web application would form as a
              particular interactive backdrop to the exhibit which will inspire
              dialogue both between visitors and the exhibit and amongst
              visitors themselves.
            </p>
            <p>
              This interaction is inspired by the work of curator Nina Simon,
              who in <a href="https://www.participatorymuseum.org/chapter3/"><em>The Participatory Museum</em></a> describes the Ontario
              Science Center&rsquo;s &ldquo;Facing Mars&rdquo; traveling
              exhibition. Visitors entered the exhibit by answering the
              question, &ldquo;Would you go to Mars?&rdquo; by entering
              turnstiles labeled &ldquo;yes&rdquo; or &ldquo;no&rdquo;.
            </p>
            <h6 class="text-h6 text-center">Entering the Exhibit</h6>
            <p>Visitors to <em>The Dress</em> exhibit would also answer a question as they enter, in this case a query about how they see the dress on a tablet touch screen. This screen is shown on the <a href="add">Add Response</a> page. This poll allows for visitors who see something other than the most common colors to select the &ldquo;Something Else&rdquo; option, a response that is also viable for those with visual impairments such as color blindness or full blindness.</p>
            <p>Upon selecting their choice, visitors learn what percentage of exhibit visitors selected the same response, giving immediate feedback that not everyone sees the image the same as they do. Visitors then receive a sticker that indicates how they voted, which they then wear in the exhibit.</p>
            <p>Visitors then enter the actual exhibit, and one of the screens displays the results of the vote, as shown on the <a href="/">Results</a> page.</p>
            <p>The goal of this digital interaction, along with the badge stickers, is to provoke visitors to discuss why they see the dress differently and why social media causes different viewpoints to develop.</p>
            </v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "about",
};
</script>