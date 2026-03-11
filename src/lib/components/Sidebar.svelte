<script lang="ts">
  let { onClose } = $props();
</script>

<div class="sidebar">
w
</div>

<style lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 340px;
    margin: 15px;
    max-width: 99vw;
    border-radius: 20px;

    background: transparent;
    backdrop-filter: blur(4px);
    border: 1px solid var(--foreground);
  }
</style>