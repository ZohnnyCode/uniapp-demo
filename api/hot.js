import request from "@/utils/request.js";

export function getHotTabs() {
  return request({
    url: "/hot/tabs",
  });
}

export function getHotList(type) {
  return request({
    url: "/hot/list",
    data: { type },
  });
}
