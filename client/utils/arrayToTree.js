/* eslint-disable */

export default function arrayToTree(data, nodesField, idField, parentIdField) {
  if (!nodesField) {
    nodesField = 'children'
  }
  idField = idField || '_id'
  parentIdField = parentIdField || '_pid'

  const nodes = []

  const idHash = {}
  for (var i = 0, l = data.length; i < l; i++) {
    var o = data[i]
    if (!o) {
      continue
    }
    const id = o[idField]
    if (id !== null && id !== undefined) {
      idHash[id] = o
    }
    delete o[nodesField]
  }

  for (var i = 0, l = data.length; i < l; i++) {
    var o = data[i]
    const p = idHash[o[parentIdField]]
    if (!p) {
      nodes.push(o)
      continue
    }
    if (!p[nodesField]) {
      p[nodesField] = []
    }
    p[nodesField].push(o)
  }
  return nodes
}
