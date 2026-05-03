import React from 'react'

const Dashboard = () => {
  return (
   <>   
   <div>
  <div className="row g-3 mb-3">
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100 ecommerce-card-min-width">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2 d-flex align-items-center">Weekly Sales<span className="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculated according to last week's sales"><span className="far fa-question-circle" data-fa-transform="shrink-1" /></span></h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row">
            <div className="col">
              <p className="font-sans-serif lh-1 mb-1 fs-4">$47K</p><span className="badge badge-soft-success rounded-pill fs--2">+3.5%</span>
            </div>
            <div className="col-auto ps-0">
              <div className="echart-bar-weekly-sales h-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-header pb-0">
          <h6 className="mb-0 mt-2">Total Order</h6>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <div className="row justify-content-between">
            <div className="col-auto align-self-end">
              <div className="fs-4 fw-normal font-sans-serif text-700 lh-1 mb-1">58.4K</div><span className="badge rounded-pill fs--2 bg-200 text-primary"><span className="fas fa-caret-up me-1" />13.6%</span>
            </div>
            <div className="col-auto ps-0 mt-n4">
              <div className="echart-default-total-order" data-echarts="{&quot;tooltip&quot;:{&quot;trigger&quot;:&quot;axis&quot;,&quot;formatter&quot;:&quot;{b0} : {c0}&quot;},&quot;xAxis&quot;:{&quot;data&quot;:[&quot;Week 4&quot;,&quot;Week 5&quot;,&quot;Week 6&quot;,&quot;Week 7&quot;]},&quot;series&quot;:[{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:[20,40,100,120],&quot;smooth&quot;:true,&quot;lineStyle&quot;:{&quot;width&quot;:3}}],&quot;grid&quot;:{&quot;bottom&quot;:&quot;2%&quot;,&quot;top&quot;:&quot;2%&quot;,&quot;right&quot;:&quot;10px&quot;,&quot;left&quot;:&quot;10px&quot;}}" data-echart-responsive="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-body">
          <div className="row h-100 justify-content-between g-0">
            <div className="col-5 col-sm-6 col-xxl pe-2">
              <h6 className="mt-1">Market Share</h6>
              <div className="fs--2 mt-3">
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center"><span className="dot bg-primary" /><span className="fw-semi-bold">Samsung</span></div>
                  <div className="d-xxl-none">33%</div>
                </div>
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center"><span className="dot bg-info" /><span className="fw-semi-bold">Huawei</span></div>
                  <div className="d-xxl-none">29%</div>
                </div>
                <div className="d-flex flex-between-center mb-1">
                  <div className="d-flex align-items-center"><span className="dot bg-300" /><span className="fw-semi-bold">Apple</span></div>
                  <div className="d-xxl-none">20%</div>
                </div>
              </div>
            </div>
            <div className="col-auto position-relative">
              <div className="echart-market-share" />
              <div className="position-absolute top-50 start-50 translate-middle text-dark fs-2">26M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xxl-3">
      <div className="card h-md-100">
        <div className="card-header d-flex flex-between-center pb-0">
          <h6 className="mb-0">Weather</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-weather-update" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2" /></button>
            <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-weather-update"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
              <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
            </div>
          </div>
        </div>
        <div className="card-body pt-2">
          <div className="row g-0 h-100 align-items-center">
            <div className="col">
              <div className="d-flex align-items-center"><img className="me-3" src="assets/img/icons/weather-icon.png" alt height={60} />
                <div>
                  <h6 className="mb-2">New York City</h6>
                  <div className="fs--2 fw-semi-bold">
                    <div className="text-warning">Sunny</div>Precipitation: 50%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto text-center ps-2">
              <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1">31°</div>
              <div className="fs--1 text-800">32° / 25°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-lg-6 pe-lg-2 mb-3">
      <div className="card h-lg-100 overflow-hidden">
        <div className="card-header bg-light">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="mb-0">Running Projects</h6>
            </div>
            <div className="col-auto text-center pe-x1">
              <select className="form-select form-select-sm">
                <option>Working Time</option>
                <option>Estimated Time</option>
                <option>Billable Time</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-soft-primary text-dark"><span className="fs-0 text-primary">F</span></div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Falcon</a><span className="badge rounded-pill ms-2 bg-200 text-primary">38%</span></h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs--1 fw-semi-bold">12:50:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div className="progress bg-200 me-2" style={{height: 5}}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{width: '38%'}} aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-soft-success text-dark"><span className="fs-0 text-success">R</span></div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Reign</a><span className="badge rounded-pill ms-2 bg-200 text-primary">79%</span></h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs--1 fw-semi-bold">25:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div className="progress bg-200 me-2" style={{height: 5}}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{width: '79%'}} aria-valuenow={79} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-soft-info text-dark"><span className="fs-0 text-info">B</span></div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Boots4</a><span className="badge rounded-pill ms-2 bg-200 text-primary">90%</span></h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs--1 fw-semi-bold">58:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div className="progress bg-200 me-2" style={{height: 5}}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-soft-warning text-dark"><span className="fs-0 text-warning">R</span></div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Raven</a><span className="badge rounded-pill ms-2 bg-200 text-primary">40%</span></h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs--1 fw-semi-bold">21:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div className="progress bg-200 me-2" style={{height: 5}}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center py-2 position-relative">
            <div className="col ps-x1 py-1 position-static">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-3">
                  <div className="avatar-name rounded-circle bg-soft-danger text-dark"><span className="fs-0 text-danger">S</span></div>
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Slick</a><span className="badge rounded-pill ms-2 bg-200 text-primary">70%</span></h6>
                </div>
              </div>
            </div>
            <div className="col py-1">
              <div className="row flex-end-center g-0">
                <div className="col-auto pe-2">
                  <div className="fs--1 fw-semi-bold">31:20:00</div>
                </div>
                <div className="col-5 pe-x1 ps-2">
                  <div className="progress bg-200 me-2" style={{height: 5}}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-light p-0"><a className="btn btn-sm btn-link d-block w-100 py-2" href="#!">Show all projects<span className="fas fa-chevron-right ms-1 fs--2" /></a></div>
      </div>
    </div>
    <div className="col-lg-6 ps-lg-2 mb-3">
      <div className="card h-lg-100">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-auto">
              <h6 className="mb-0">Total Sales</h6>
            </div>
            <div className="col-auto d-flex">
              <select className="form-select form-select-sm select-month me-2">
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>Jun</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2" /></button>
                <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                  <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body h-100 pe-0">
          {/* Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js*/}
          {/* If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js*/}
          <div className="echart-line-total-sales h-100" data-echart-responsive="true" />
        </div>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-lg-6 col-xl-7 col-xxl-8 mb-3 pe-lg-2 mb-3">
      <div className="card h-lg-100">
        <div className="card-body d-flex align-items-center">
          <div className="w-100">
            <h6 className="mb-3 text-800">Using Storage <strong className="text-dark">1775.06 MB </strong>of 2 GB</h6>
            <div className="progress mb-3 rounded-3" style={{height: 10}}>
              <div className="progress-bar bg-progress-gradient border-end border-white border-2" role="progressbar" style={{width: '43.72%'}} aria-valuenow="43.72" aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-info border-end border-white border-2" role="progressbar" style={{width: '18.76%'}} aria-valuenow="18.76" aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-success border-end border-white border-2" role="progressbar" style={{width: '9.38%'}} aria-valuenow="9.38" aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-200" role="progressbar" style={{width: '28.14%'}} aria-valuenow="28.14" aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="row fs--1 fw-semi-bold text-500 g-0">
              <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-primary" /><span>Regular</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(895MB)</span></div>
              <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-info" /><span>System</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(379MB)</span></div>
              <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-success" /><span>Shared</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(192MB)</span></div>
              <div className="col-auto d-flex align-items-center"><span className="dot bg-200" /><span>Free</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(576MB)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-xl-5 col-xxl-4 mb-3 ps-lg-2">
      <div className="card h-lg-100">
        <div className="bg-holder bg-card" style={{backgroundImage: 'url(assets/img/icons/spot-illustrations/corner-1.png)'}}>
        </div>
        {/*/.bg-holder*/}
        <div className="card-body position-relative">
          <h5 className="text-warning">Running out of your space?</h5>
          <p className="fs--1 mb-0">Your storage will be running out soon. Get more space and powerful productivity features.</p><a className="btn btn-link fs--1 text-warning mt-lg-3 ps-0" href="#!">Upgrade storage<span className="fas fa-chevron-right ms-1" data-fa-transform="shrink-4 down-1" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-lg-7 col-xl-8 pe-lg-2 mb-3">
      <div className="card h-lg-100 overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive scrollbar">
            <table className="table table-dashboard mb-0 table-borderless fs--1 border-200">
              <thead className="bg-light">
                <tr className="text-900">
                  <th>Best Selling Products</th>
                  <th className="text-end">Revenue ($3333)</th>
                  <th className="pe-x1 text-end" style={{width: '8rem'}}>Revenue (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/12.png" width={60} alt />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Raven Pro</a></h6>
                        <p className="fw-semi-bold mb-0 text-500">Landing</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$1311</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div className="progress me-3 rounded-3 bg-200" style={{height: 5, width: 80}}>
                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '39%'}} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="fw-semi-bold ms-2">39%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/10.png" width={60} alt />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Boots4</a></h6>
                        <p className="fw-semi-bold mb-0 text-500">Portfolio</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$860</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div className="progress me-3 rounded-3 bg-200" style={{height: 5, width: 80}}>
                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '26%'}} aria-valuenow={26} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="fw-semi-bold ms-2">26%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/11.png" width={60} alt />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Falcon</a></h6>
                        <p className="fw-semi-bold mb-0 text-500">Admin</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$539</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div className="progress me-3 rounded-3 bg-200" style={{height: 5, width: 80}}>
                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '16%'}} aria-valuenow={16} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="fw-semi-bold ms-2">16%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-bottom border-200">
                  <td>
                    <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/14.png" width={60} alt />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Slick</a></h6>
                        <p className="fw-semi-bold mb-0 text-500">Builder</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$343</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div className="progress me-3 rounded-3 bg-200" style={{height: 5, width: 80}}>
                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="fw-semi-bold ms-2">10%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/13.png" width={60} alt />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Reign Pro</a></h6>
                        <p className="fw-semi-bold mb-0 text-500">Agency</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end fw-semi-bold">$280</td>
                  <td className="align-middle pe-x1">
                    <div className="d-flex align-items-center">
                      <div className="progress me-3 rounded-3 bg-200" style={{height: 5, width: 80}}>
                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '8%'}} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="fw-semi-bold ms-2">8%</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-light py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <select className="form-select form-select-sm">
                <option>Last 7 days</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="col-auto"><a className="btn btn-sm btn-falcon-default" href="#!">View All</a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 col-xl-4 ps-lg-2 mb-3">
      <div className="card">
        <div className="card-header d-flex flex-between-center bg-light py-2">
          <h6 className="mb-0">Shared Files</h6><a className="py-1 fs--1 font-sans-serif" href="#!">View All</a>
        </div>
        <div className="card-body pb-0">
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/5-thumb.png" alt />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">apple-smart-watch.png</a></h6>
              <div className="fs--1"><span className="fw-semi-bold">Antony</span><span className="fw-medium text-600 ms-2">Just Now</span></div>
              <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt width={15} /></a>
                <button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt width={15} /></button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/3-thumb.png" alt />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">iphone.jpg</a></h6>
              <div className="fs--1"><span className="fw-semi-bold">Antony</span><span className="fw-medium text-600 ms-2">Yesterday at 1:30 PM</span></div>
              <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt width={15} /></a>
                <button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt width={15} /></button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail"><img className="img-fluid" src="assets/img/icons/zip.png" alt />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">Falcon v1.8.2</a></h6>
              <div className="fs--1"><span className="fw-semi-bold">Jane</span><span className="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span></div>
              <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt width={15} /></a>
                <button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt width={15} /></button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/2-thumb.png" alt />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">iMac.jpg</a></h6>
              <div className="fs--1"><span className="fw-semi-bold">Rowen</span><span className="fw-medium text-600 ms-2">23 Sep at 6:10 PM</span></div>
              <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt width={15} /></a>
                <button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt width={15} /></button>
              </div>
            </div>
          </div>
          <hr className="text-200" />
          <div className="d-flex mb-3 hover-actions-trigger align-items-center">
            <div className="file-thumbnail"><img className="img-fluid" src="assets/img/icons/docs.png" alt />
            </div>
            <div className="ms-3 flex-shrink-1 flex-grow-1">
              <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">functions.php</a></h6>
              <div className="fs--1"><span className="fw-semi-bold">John</span><span className="fw-medium text-600 ms-2">1 Oct at 4:30 PM</span></div>
              <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt width={15} /></a>
                <button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt width={15} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-sm-6 col-xxl-3 pe-sm-2 mb-3 mb-xxl-0">
      <div className="card">
        <div className="card-header d-flex flex-between-center bg-light py-2">
          <h6 className="mb-0">Active Users</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-active-user" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2" /></button>
            <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-active-user"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
              <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
            </div>
          </div>
        </div>
        <div className="card-body py-2">
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-online">
              <img className="rounded-circle" src="assets/img/team/1.jpg" alt />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Emma Watson</a></h6>
              <p className="text-500 fs--2 mb-0">Admin</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-online">
              <img className="rounded-circle" src="assets/img/team/2.jpg" alt />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Antony Hopkins</a></h6>
              <p className="text-500 fs--2 mb-0">Moderator</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-away">
              <img className="rounded-circle" src="assets/img/team/3.jpg" alt />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Anna Karinina</a></h6>
              <p className="text-500 fs--2 mb-0">Editor</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative mb-3">
            <div className="avatar avatar-2xl status-offline">
              <img className="rounded-circle" src="assets/img/team/4.jpg" alt />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">John Lee</a></h6>
              <p className="text-500 fs--2 mb-0">Admin</p>
            </div>
          </div>
          <div className="d-flex align-items-center position-relative false">
            <div className="avatar avatar-2xl status-offline">
              <img className="rounded-circle" src="assets/img/team/5.jpg" alt />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Rowen Atkinson</a></h6>
              <p className="text-500 fs--2 mb-0">Editor</p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-light p-0"><a className="btn btn-sm btn-link d-block w-100 py-2" href="app/social/followers.html">All active users<span className="fas fa-chevron-right ms-1 fs--2" /></a></div>
      </div>
    </div>
    <div className="col-sm-6 col-xxl-3 ps-sm-2 order-xxl-1 mb-3 mb-xxl-0">
      <div className="card h-100">
        <div className="card-header bg-light d-flex flex-between-center py-2">
          <h6 className="mb-0">Bandwidth Saved</h6>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-bandwidth-saved" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2" /></button>
            <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-bandwidth-saved"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
              <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
            </div>
          </div>
        </div>
        <div className="card-body d-flex flex-center flex-column">
          {/* Find the JS file for the following chart at: src/js/charts/echarts/bandwidth-saved.js*/}
          {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
          <div className="echart-bandwidth-saved" data-echart-responsive="true" />
          <div className="text-center mt-3">
            <h6 className="fs-0 mb-1"><span className="fas fa-check text-success me-1" data-fa-transform="shrink-2" />35.75 GB saved</h6>
            <p className="fs--1 mb-0">38.44 GB total bandwidth</p>
          </div>
        </div>
        <div className="card-footer bg-light py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <select className="form-select form-select-sm">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>Last 2 Year</option>
              </select>
            </div>
            <div className="col-auto"><a className="fs--1 font-sans-serif" href="#!">Help</a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 px-xxl-2">
      <div className="card h-100">
        <div className="card-header bg-light py-2">
          <div className="row flex-between-center">
            <div className="col-auto">
              <h6 className="mb-0">Top Products</h6>
            </div>
            <div className="col-auto d-flex"><a className="btn btn-link btn-sm me-2" href="#!">View Details</a>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-top-products" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2" /></button>
                <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-top-products"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                  <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body h-100">
          {/* Find the JS file for the following chart at: src/js/charts/echarts/top-products.js*/}
          {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
          <div className="echart-bar-top-products h-100" data-echart-responsive="true" />
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Dashboard