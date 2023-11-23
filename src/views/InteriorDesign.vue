<template>
  <v-card
    :max-width="1500"
    style="
      height: 1700px;
      margin-left: 130px;
      background-color: rgb(239, 240, 241);
      outline: 0.3px solid #5e5e5e;
    "
  >
    <v-row style="padding: 10px">
      <v-col cols="8">
        <v-card style="height: 500px">
          <!-- <h3>Image</h3> -->
          <v-img
            class="align-center"
            height="900"
            width="1200"
            :src="sample"
            cover
          >
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card style="height: 500px">
          <v-row>
            <v-col style="margin: 20px">
              <h3>Upload room image</h3>
              <v-file-input show-size label="File input"></v-file-input>
              <h3>Upload the mask</h3>
              <v-file-input show-size label="File input"></v-file-input>
              <small>Enter the description of the desiring room</small>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Enter the prompt here"
                style="width: 90%; margin-left: 40px"
              ></v-textarea>
              <v-btn
                color="white"
                style="background-color: #000"
                class="mt-4"
                prepend-icon="mdi-creation"
                block
                @click="resetValidation"
              >
                Generate
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <hr />

      <v-col>
        <p class="text-left">
          Add your budget limit and extra description of the furniture eg.
          Amazon, WayFair, IKEA
        </p>
        <br>
        <v-form>
                <v-text-field
                  v-model="message"
                  append-icon="mdi-send"
                  variant="filled"
                  clearable
                  label="Add your budget"
                  type="text"
                  style="width: 400px;"
                  @click:append-inner="toggleMarker"
                  @click:append="sendMessage"
                  @click:clear="clearMessage"
                ></v-text-field>
        </v-form>

        <br />
        <v-card
          prepend-icon="mdi-creation"
          style="
            width: 100%;
            height: 180px;
            background-color: rgb(0, 0, 0, 0.2);
          "
        >
        </v-card>
      </v-col>
    </v-row>
    <h2 class="text-left" style="margin-left: 20px">
      Here are the recommended products
    </h2>
    <v-row style="margin: 10px">
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img class="align-center" height="200" :src="item1" cover>
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item2"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item3"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item4"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="margin: 10px">
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item5"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item6"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item8"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="item7"
              cover
            >
            </v-img>
            <h4 class="text-left">product name</h4>
            <h4 class="text-left">product price</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
              @click="resetValidation"
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import item1 from "../assets/products/bed.webp";
import item2 from "../assets/products/chair.avif";
import item3 from "../assets/products/coffee-table.avif";
import item4 from "../assets/products/desk.avif";
import item5 from "../assets/products/light.avif";
import item6 from "../assets/products/bed-2.avif";
import item7 from "../assets/products/shelf.avif";
import item8 from "../assets/products/sofa.avif";
import sample from "../assets/img/sample.jpg";

export default {
  data() {
    return {
      sample: sample,
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
      item6: item6,
      item7: item7,
      item8: item8,
    };
  },
};
</script>

<style lang="scss" scoped></style>
