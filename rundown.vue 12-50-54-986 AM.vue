<template>
  <div>
    <a-button
      @click="$router.go(-1)"
      type="link"
      class="cr-gray"
      icon="arrow-left"
      style="margin-bottom: 8px"
    >Kembali</a-button>

    <div class="container" style="margin-bottom: 16px">
      <div style="padding: 24px">
        <div class="fs-16 cr-black" style="margin-bottom: 8px">Informasi Kegiatan</div>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">40 Orang</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Oktober 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Desember 2019</div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Campus I</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">1B Lantai 1</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">Jl. BTP Blok A No 537</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container" style="margin-bottom: 16px">
      <div class="title p24">Rundown Kegiatan</div>

      <div style="padding: 0 24px 24px 24px;">
        <a-timeline>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 1</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Senin, 12 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 2</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Selasa, 13 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 3</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Rabu, 14 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 4</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Kamis, 15 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 5</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Jumat, 16 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 6</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Sabtu, 17 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>

    <div class="container">
      <div style="padding: 24px;text-align:center">
        <a-button type="primary" size="large" icon="plus" @click="showModal">Buat Rundown Kegiatan</a-button>
      </div>

      <!-- if add rundown -->
      <a-modal title="Rundown Kegiatan" :footer="false" v-model="visible" @ok="handleOk">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
          <div v-for="(days, index) in form.getFieldValue('keys')" :key="days">
            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="12" :md="12">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`name[${days}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        initialValue: `Hari ke ${days}`,
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="Nama Peserta"
                    disabled
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12" :md="12">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-date-picker
                    :disabledDate="disabledDate"
                    v-decorator="[`date[${days}]`, config]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="20" :md="20">
                <a-form-item :label="index === 0 ? '' : ''" :required="false" class="mb-0">
                  <a-textarea
                    :rows="4"
                    v-decorator="[`desc[${days}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="Deskripsi Kegiatan"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="12" :sm="4" :md="4">
                <a-form-item class="mb-0">
                  <div
                    v-if="form.getFieldValue('keys').length > 0"
                    :disabled="form.getFieldValue('keys').length === 0"
                    @click="() => remove(days)"
                  >
                    <a-button type="danger" block>
                      <a-icon type="minus" />
                    </a-button>
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
            <a-divider></a-divider>
          </div>

          <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :md="12">
              <a-button type="dashed" @click="add" block style="margin-bottom: 8px">
                <a-icon type="plus" />Tambah
              </a-button>
            </a-col>
            <a-col :xs="24" :sm="12" :md="12">
              <a-button
                v-if="form.getFieldValue('keys').length > 0"
                type="primary"
                html-type="submit"
                block
                style="margin-bottom: 8px"
              >Simpan</a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script>
import moment from "moment";
let id = 0;
export default {
  name: "rundown",
  middleware: "auth",
  layout: "bkd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  head() {
    return {
      title: "Rundown Kegiatan - BKD"
    };
  },
  data() {
    return {
      visible: false,
      config: {
        rules: [
          { type: "object", required: true, message: "Harus di isi!" }
        ]
      }
    };
  },
  methods: {
    moment,
    remove(days) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 0) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== days)
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(++id);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      });
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    },

    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      console.log(e);
      this.visible = false;
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      });
    }
  }
};
</script>