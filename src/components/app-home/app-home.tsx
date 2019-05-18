import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>This is a demo on Stencil App.</p>

        <stencil-route-link url="/profile/franklin">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
