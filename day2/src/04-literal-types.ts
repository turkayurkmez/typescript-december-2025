type status = "success" | "error" | "pending";

function handle(state: status) {
  console.log(state);
}

handle("pending");
//Template Literal Types:

type EventName = `on${"Click" | "Hover" | "Change" | "Focus"}`;

function registerEvent(event: EventName, handler: () => void) {
  console.log("Event kaydedildi", event);
  handler();
}

registerEvent("onChange", () => {
  console.log("değişti...");
});
registerEvent("onHover", () => {
  console.log("üzerine geldi");
});

type httpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type apiEndPoints = `/api/${string}/${httpMethod}`;

function callApi(api: apiEndPoints): void {
  console.log("api çağrılıyor:", api);
}

callApi("/api/users/GET");