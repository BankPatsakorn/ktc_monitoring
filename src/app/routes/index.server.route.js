module.exports = (app) => {
  const index = require('../controllers/index.server.controller')
  app.get('/', index.render)
  app.get('/:lang/login', index.render)
  app.get('/:lang/dashboard_all', index.render)
  app.get('/:lang/dashboard/:udid', index.render)
  app.get('/:lang/tracking_realtime', index.render)
  app.get('/:lang/tracking_history', index.render)
  // app.get('/:lang/camera_realtime', index.render)
  // app.get('/:lang/camera_snapshot', index.render)
  app.get('/:lang/report_usage_vehicle', index.render)
  // app.get('/:lang/report_idling', index.render)
  // app.get('/:lang/report_parking', index.render)
  // app.get('/:lang/report_over_speed', index.render)
  // app.get('/:lang/report_inout_station', index.render)
  // app.get('/:lang/report_sliding_card', index.render)
  app.get('/:lang/report_scan_card', index.render)
  app.get('/:lang/report_usage_vehicle_and_driver', index.render)
  app.get('/:lang/report_summary', index.render)
  app.get('/:lang/graph_usage_vehicle', index.render)
  app.get('/:lang/graph_efficient', index.render)
  app.get('/:lang/graph_over_speed', index.render)
  app.get('/:lang/graph_fuel', index.render)
  app.get('/:lang/graph_battery', index.render)
  app.get('/:lang/graph_work_time', index.render)
  app.get('/:lang/graph_vibration', index.render)
  // app.get('/:lang/maintenance_lubricant', index.render)
  // app.get('/:lang/maintenance_tire', index.render)
  app.get('/:lang/maintenance_work_time_batt', index.render)
  app.get('/:lang/maintenance_work_time_lpg', index.render)
  // app.get('/:lang/setting_company', index.render)
  app.get('/:lang/setting_driver', index.render)
  app.get('/:lang/setting_vehicle', index.render)
  app.get('/:lang/setting_group', index.render)
  app.get('/:lang/setting_staff', index.render)
  app.get('/:lang/change_password', index.render)
  // app.get('*', (req, res) => {
  //   res.send('what???', 404)
  // })
}
