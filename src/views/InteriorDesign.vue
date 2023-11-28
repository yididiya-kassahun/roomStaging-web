<template>
  <v-card
    :max-width="1500"
    style="
      height: 1800px;
      margin-left: 130px;
      background-color: rgb(239, 240, 241);
      outline: 0.3px solid #5e5e5e;
    "
  >
    <v-row style="padding: 10px">
      <v-col cols="8">
        <v-card ref="myTargetCard" style="height: 500px">
          <canvas style="margin-left: 5%; border: 1px solid #000" ref="canvas">
          </canvas>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card style="height: 500px">
          <v-row>
            <v-col style="margin: 20px">
              <v-form
                @submit.prevent="generateImg"
                class="form-container"
                enctype="multipart/form-data"
              >
                <h3>Upload Room Image</h3>
                <!-- show-size -->
                <v-file-input
                  show-size
                  label="File input"
                  @change="uploadImage"
                  v-model="imgData.img"
                  accept="image/*"
                ></v-file-input>
                <h3>Enter your description</h3>
                <!-- <v-file-input
                  show-size
                  label="File input"
                  v-model="imgData.imgMask"
                  accept="image/*"
                ></v-file-input> -->
                <small>Enter the description of the desiring room</small>
                <v-textarea
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Enter the prompt here"
                  rows="8"
                  v-model="imgData.prompt"
                  style="width: 90%; margin-left: 40px"
                ></v-textarea>
                <v-row>
                  <v-col cols="8">
                    <v-btn
                      color="white"
                      style="background-color: #000"
                      class="mt-4"
                      prepend-icon="mdi-creation"
                      block
                      type="submit"
                    >
                      Generate
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                      color="white"
                      style="background-color: #000"
                      class="mt-4"
                      prepend-icon="mdi-download"
                      block
                      @click="downloadImage()"
                    >
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
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
        <br />
        <v-form>
          <v-text-field
            v-model="message"
            append-icon="mdi-send"
            variant="filled"
            clearable
            label="Add your budget"
            type="text"
            style="width: 400px"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
            @click:clear="clearMessage"
          >
          </v-text-field>
        </v-form>

        <br />
        <v-card
          prepend-icon="mdi-creation"
          style="
            width: 100%;
            height: fit-content;
            background-color: rgb(0, 0, 0, 0.2);
          "
        >
          <v-card-text>
            <div class="gpt-result text-left">
              Creating an itemized list for your room within a $500 budget can
              be quite challenging, especially since prices can fluctuate and
              specific item costs may vary. However, I'll give you an estimated
              breakdown based on typical costs for budget-friendly items on
              IKEA. Keep in mind these are estimates and actual prices may
              differ:
              <ul>
                <li>Comfortable Chair with Ottoman: ~$150</li>
                <li>Foldable Desk: ~$50</li>
                <li>Space-Saving Chair: ~$30</li>
                <li>TV Stand with Storage: ~$60</li>
                <li>Indoor Plants: ~$20</li>
              </ul>
            </div>
          </v-card-text>
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
      <!-- <v-col v-for="(furniture) in ikeaFurnitures" :key="furniture.id">
       <v-card>
          <div style="padding: 20px">
            <v-img
              class="align-center"
              height="200"
              width="200"
              :src="furniture.image"
              :alt="furniture.imageAlt"
              cover
            >
            </v-img>
            <h4 class="text-left">product name {{furniture.name}}</h4>
            <h4 class="text-left">product price {{ furniture.price.currentPrice }}</h4>
            <v-btn
              color="white"
              style="background-color: #000"
              class="mt-4"
              block
            >
              Get a product
            </v-btn>
          </div>
        </v-card>
      </v-col> -->
      <!-- Pagination controls -->
    </v-row>
    <v-col>
      <div class="pagination">
        <v-btn @click="prevPage" :disabled="currentPage === 1">Previous</v-btn>
        <span style="padding: 5px">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <v-btn @click="nextPage" :disabled="currentPage === totalPages"
          >Next</v-btn
        >
      </div>
    </v-col>
  </v-card>
</template>

<script>
import axios from "axios";
import { fabric } from "fabric";

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
      //sample: sample,
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
      item6: item6,
      item7: item7,
      item8: item8,
      imgData: {
        img: null,
        prompt: "",
        canvas: null,
        sampleImage: sample,
      },
      ikeaFurnitures: [],
      itemsPerPage: 10, // Number of items to display per page
      currentPage: 1, // Current page
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    canvas.width = 900;
    canvas.height = 500;
    this.initCanvas();
    // Fetch data for the first item when the component is mounted
    // if (this.items.length > 0) {
    //   this.fetchData(this.items[0]);
    // }
  },
  methods: {
    initCanvas() {
      this.canvas = new fabric.Canvas(this.$refs.canvas);
      this.canvas.isDrawingMode = true;

      // Set up the brush
      this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
      this.canvas.freeDrawingBrush.width = 20; // Adjust brush size

      // Load the sample image
      fabric.Image.fromURL(this.sampleImage, (img) => {
        const imgScaled = img.scaleToWidth(this.canvas.width);
        imgScaled.set({ left: 0, top: 0 });
        this.canvas.setBackgroundImage(
          imgScaled,
          this.canvas.renderAll.bind(this.canvas)
        );
      });

      // Set the brush to modify alpha channel (eraser)
      this.canvas.on("path:created", (opt) => {
        const path = opt.path;
        path.globalCompositeOperation = "destination-out";
      });
    },
    uploadImage(event) {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          fabric.Image.fromURL(e.target.result, (img) => {
            const scale = Math.min(
              this.canvas.width / img.width,
              this.canvas.height / img.height
            );
            img.scale(scale).set({ left: 0, top: 0 });

            // Set as background image
            this.canvas.setBackgroundImage(
              img,
              this.canvas.renderAll.bind(this.canvas),
              {
                // Options to set the background image
                originX: "left",
                originY: "top",
                scaleX: scale,
                scaleY: scale,
              }
            );
          });
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    },

    // converting base64 image to file

    convertBase64ToBlob(base64) {
      return new Promise((resolve) => {
        const parts = base64.split(";base64,");
        const imageType = parts[0].split(":")[1];
        const decodedData = window.atob(parts[1]);
        const uInt8Array = new Uint8Array(decodedData.length);

        for (let i = 0; i < decodedData.length; ++i) {
          uInt8Array[i] = decodedData.charCodeAt(i);
        }

        resolve(new Blob([uInt8Array], { type: imageType }));
      });
    },

    generateImg() {
      const base64Img = this.canvas.toDataURL({
        format: "png",
        quality: 1,
      });

      this.convertBase64ToBlob(base64Img)
        .then((blob) => {
          //  console.log("========>"+blob);

          const formData = new FormData();
          formData.append("img", this.imgData.img[0]);
          formData.append("imgMask", blob, "imageMask.png");
          formData.append("prompt", this.imgData.prompt);

          const config = { headers: { "Content-Type": "multipart/form-data" } };

          axios
            .post("generate.image", formData, config)
            .then((result) => {
              console.log(result);
              return this.$router.push("/design");
            })
            .catch((err) => {
              console.log("errpr", err.message);
            });
        })
        .then((response) => {
          console.log("Image uploaded successfully", response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // download Image

    downloadImage() {
      const dataURL = this.canvas.toDataURL({
        format: "png",
        quality: 1,
      });

      console.log("dataURL " + JSON.stringify(dataURL));

      // Create a temporary link element
      const link = document.createElement("a");
      link.download = "furnished-room.png";
      link.href = dataURL;
      document.body.appendChild(link);

      // Trigger the download and remove the link
      link.click();
      document.body.removeChild(link);
    },

    // render a list of products from IKEA store
    async fetchData() {
      const options = {
        method: "GET",
        url: "https://ikea-api.p.rapidapi.com/keywordSearch",
        params: {
          keyword: "Table",
          countryCode: "us",
          languageCode: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "4e5baec1b7msh9cc64cb3a7c71e8p1bbb7fjsn1928518f967d",
          "X-RapidAPI-Host": "ikea-api.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        this.ikeaFurnitures = response.data;
        // renderProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    // Go to the previous page
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // Go to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  computed: {
    // Calculate the total number of pages based on items and itemsPerPage
    totalPages() {
      return Math.ceil(this.ikeaFurnitures.length / this.itemsPerPage);
    },
    // Calculate the items to display on the current page
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
  },
};
</script>

<style scoped>
ul {
  margin-left: 40px;
}
.gpt-result {
  font-size: 17px;
  font-family: sans-serif;
}
</style>
