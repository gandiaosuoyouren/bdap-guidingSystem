<template>
    <div>
      <h1>Knowledge Graph</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="node in nodes" :key="node.id">
          {{ node.label }}
        </div>
        <div v-for="link in links" :key="link.source + '-' + link.target">
          {{ link.type }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nodes: [],
        links: [],
        loading: false
      };
    },
    mounted() {
      this.fetchKnowledgeGraph();
    },
    methods: {
      async fetchKnowledgeGraph() {
        try {
          this.loading = true;
          const response = await axios.get('http://localhost:3001/api/knowledge-graph');
          this.nodes = response.data.nodes;
          this.links = response.data.links;
          this.loading = false;
        } catch (error) {
          console.error('Error fetching knowledge graph:', error);
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add your component styles here */
  </style>
  