import { mapState } from 'vuex';

export default {
  // data() {
  //   return {
  //     response: JSON.stringify(JSON.parse('[{"url": "hello/1"}]'), null, '\t'),
  //   };
  // },
  created() {
    const id = this.$route.params.id;
    if (id !== 'new' && Number(id)) {
      this.$store.dispatch('endpoint/load', Number(id));
    }
  },
  components: {
    Brace: require('xen-brace'),
  },
  computed: mapState({
    endpoint: state => state.endpoint,
  }),
  methods: {
    updateResponse(response) {
      const payload = { ...this.endpoint, response };
      this.$store.dispatch('endpoint/updateEndpointData', payload);
    },
    updateStatus({ target: { value: status } }) {
      const payload = { ...this.endpoint, status };
      this.$store.dispatch('endpoint/updateEndpointData', payload);
    },
    updateEndpoint({ target: { value: endpoint } }) {
      const payload = { ...this.endpoint, endpoint };
      this.$store.dispatch('endpoint/updateEndpointData', payload);
    },
    save() {
      this.$store.dispatch('endpoint/saveEndpointData', this.endpoint);
      this.$router.push({
        name: 'home.index'
      });
    },
    cancel() {
      this.$router.push({
        name: 'home.index'
      });
    },
    remove() {
      this.$store.dispatch('endpoint/removeEndpoint', this.endpoint);
      this.$store.dispatch('home/refresh');
      this.$router.push({
        name: 'home.index'
      });
    }
  },
};