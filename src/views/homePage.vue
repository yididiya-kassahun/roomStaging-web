<template>
  <v-card
    :max-width="1500"
    height="90vh"
    style="
      margin-left: 130px;
      background-color: #f4f4f4;
      outline: 0.3px solid #5e5e5e;
    "
  >
    <h3>home page</h3>
    <v-container>
      <v-row>
        <v-col>
           <!-- card 1     -->
          <v-card cols="12" class="colItems">
            <v-row justify="space-around">
              <v-col cols="4">
                <v-img height="200" :src="interiorImg" cover class="text-white">
                </v-img>
              </v-col>
              <v-col>
                <v-card-text class="text-left">
                  <router-link to="/design" class="linkVal">
                    <h2>Interior Home Design</h2>
                    <br />
                  </router-link>
                  <p>
                    Upload your room image to receive a virtual room design with
                    staging.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col>
          <!-- card 2     -->
          <v-card cols="12" class="colItems">
            <v-row justify="space-around">
              <v-col cols="4">
                <v-img height="200" :src="floor2Img" cover class="text-white">
                </v-img>
              </v-col>
              <v-col>
                <v-card-text class="text-left">
                  <router-link to="/img" class="linkVal">
                    <h2>Home Floor plan to 3D Model</h2>
                  </router-link>
                  <br />
                  <p>
                    Submit your home floor plan to receive a 3D design of the
                    layout.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-responsive width="100%"></v-responsive>

        <v-col>
          <!-- card 1     -->
          <v-card cols="12" class="colItems">
            <v-row justify="space-around">
              <v-col cols="4">
                <v-img
                  height="200"
                  :src="collectionImg"
                  cover
                  class="text-white"
                >
                </v-img>
              </v-col>
              <v-col>
                <v-card-text class="text-left">
                  <h2>Inspirational Design</h2>
                  <br />
                  <p>
                    Collaborate and get inspirations from architects all around
                    the world.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col>
          <!-- card 2     -->
          <v-card cols="12" class="colItems">
            <v-row justify="space-around">
              <v-col cols="4">
                <v-img height="200" :src="idea2Img" cover class="text-white">
                </v-img>
              </v-col>
              <v-col>
                <v-card-text class="text-left">
                  <h2>Idea to Generative Image</h2>
                  <br />
                  <p>
                    State your imaginations with simple language and get the
                    images without hussle.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import interiorImg from "../assets/img/interior.png";
import floor2Img from "../assets/img/floor2design.png";
import collectionImg from "../assets/img/designs.png";
import idea2Img from "../assets/img/idea2img.png";

export default {
  data() {
    return {
      interiorImg: interiorImg,
      floor2Img: floor2Img,
      collectionImg: collectionImg,
      idea2Img: idea2Img,
    };
  },
};
</script>

<style scoped>

@media (max-width: 720px) {
   .colItems {
    width: 400px;
  }
}

@media (min-width: 721px) {
  .colItems {
    width: 550px;
  }
}


.linkVal {
  text-decoration: none;
  color: #000;
}
</style>
