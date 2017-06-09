import { mapState } from 'vuex';

export default {
  computed: mapState({
    list: state => state.home.list,
    status: state => state.home.status,
  }),
  created() {
    this.$store.dispatch('home/refresh');
    this.$store.dispatch('home/deactivateXHR');
    const status = localStorage.getItem('FHRStatus');
    if (Number(status)) {
      this.$store.dispatch('home/activateXHR', this.list);
    }
  },
  methods: {
    updateResponse(val) {
      console.log(val);
    },
    activate() {
      this.$store.dispatch('home/activateXHR', this.list);
      localStorage.setItem('FHRStatus', 1);
    },
    deactivate() {
      this.$store.dispatch('home/deactivateXHR');
      localStorage.setItem('FHRStatus', 0);
    }
  },
};