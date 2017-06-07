import { mapState } from 'vuex';

export default {
  data() {
    return {
      response: JSON.stringify(JSON.parse('[{"url": "hello/1"}]'), null, '\t'),
    };
  },
  computed: mapState({
    list: state => state.home.list,
  }),
  created(){
    this.$store.dispatch('home/refresh');
  },
  methods: {
    updateResponse(val) {
      console.log(val);
    },
  },
};